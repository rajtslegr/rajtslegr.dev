import { IPostData, IPostId, ISortedPostData } from '@/types/types';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'src/data/blog');

export const getSortedPostsData = (): ISortedPostData[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: ISortedPostData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { content, data } = matter(fileContents);

    return {
      id,
      ...data,
      readingTime: readingTime(content),
    } as ISortedPostData;
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllPostIds = (): IPostId[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
};

export const getPostData = async (id: string): Promise<IPostData> => {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { content, data } = matter(fileContents);

  const mdxContent = await serialize(content, {
    mdxOptions: { rehypePlugins: [mdxPrism] },
  });

  return {
    id,
    mdxContent,
    ...data,
    readingTime: readingTime(content),
  } as IPostData;
};
