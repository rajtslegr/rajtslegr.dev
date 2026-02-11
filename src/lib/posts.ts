import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import readingTime from 'reading-time';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import type { PostData, PostId } from '@/types/entities';

const postsDirectory = path.join(process.cwd(), 'src/data/blog');

export const getSortedPostsData = (): PostData[] => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { content, data } = matter(fileContents);

      return {
        id,
        ...data,
        readingTime: readingTime(content),
      } as PostData;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
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

const compileMarkdown = async (markdown: string): Promise<string> => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrettyCode, {
      theme: { dark: 'one-dark-pro', light: 'github-light' },
    })
    .use(rehypeStringify)
    .process(markdown);

  return String(result);
};

export const getPostData = async (
  id: string,
): Promise<PostData & { content: string }> => {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { content, data } = matter(fileContents);
  const htmlContent = await compileMarkdown(content);

  return {
    id,
    content: htmlContent,
    ...data,
  } as PostData & { content: string };
};
