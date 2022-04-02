import fs from "fs";
import path from "path";

import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";

import { getBlogViews } from "@/lib/blog-views";
import { ContentPostData, PostData, PostId } from "@/types/entities";

const postsDirectory = path.join(process.cwd(), "src/data/blog");

export const getSortedPostsData = async (): Promise<PostData[]> => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for await (const fileName of fileNames) {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { content, data } = matter(fileContents);

    const views = await getBlogViews(id);

    allPostsData.push({
      id,
      ...data,
      readingTime: readingTime(content),
      views,
    } as PostData);
  }

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
};

export const getAllPostIds = (): PostId[] => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
};

export const getPostData = async (id: string): Promise<ContentPostData> => {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(fileContents);

  const mdxContent = await serialize(content, {
    mdxOptions: { rehypePlugins: [mdxPrism] },
  });

  return {
    id,
    mdxContent,
    ...data,
  } as ContentPostData;
};
