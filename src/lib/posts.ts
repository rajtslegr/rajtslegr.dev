import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';
import rehypePrettyCode from 'rehype-pretty-code';

import { getBlogViews } from '@/lib/blog-views';
import { ContentPostData, PostData, PostId } from '@/types/entities';

const postsDirectory = path.join(process.cwd(), 'src/data/blog');

export const getSortedPostsData = async (): Promise<PostData[]> => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = [];

  await Promise.all(
    fileNames.map(async (fileName: string) => {
      const id = fileName.replace(/\.mdx$/, '');

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { content, data } = matter(fileContents);

      const views = await getBlogViews(id);

      allPostsData.push({
        id,
        ...data,
        readingTime: readingTime(content),
        views,
      } as PostData);
    }),
  );

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
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
};

export const getPostData = async (id: string): Promise<ContentPostData> => {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { content, data } = matter(fileContents);

  const rehypePrettyCodeOptions = {
    keepBackground: false,
    theme: {
      dark: 'one-dark-pro',
      light: 'github-light',
    },
    defaultLang: {
      block: 'typescript',
    },
    transformers: [
      {
        name: 'theme',
        className: (theme: string) => `${theme}`,
      },
    ],
    filterMetaString: (meta: string) => meta.replace(/^wrap$/, 'line-numbers'),
    grid: false,
  };

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
      },
    },
  });

  return {
    id,
    mdxContent,
    ...data,
  } as ContentPostData;
};
