import { getCollection } from 'astro:content';
import readingTime from 'reading-time';

import type { PostData } from '@/types/entities';

export const getSortedPostsData = async (): Promise<PostData[]> => {
  const posts = await getCollection('blog');

  return posts
    .map((post) => ({
      id: post.id,
      title: post.data.title,
      description: post.data.description,
      date: post.data.date.toISOString(),
      image: post.data.image ?? '',
      readingTime: readingTime(post.body ?? ''),
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getAllPostIds = async (): Promise<
  { params: { id: string } }[]
> => {
  const posts = await getCollection('blog');

  return posts.map((post) => ({ params: { id: post.id } }));
};
