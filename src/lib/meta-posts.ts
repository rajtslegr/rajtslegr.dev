import { PostData } from '@/types/entities';

import { getSortedPostsData } from './posts';

export const getPostMetadata = async (id: string): Promise<PostData | null> => {
  try {
    const allPosts = await getSortedPostsData();

    const foundPost = allPosts.find((post) => post.id === id);

    if (!foundPost) return null;

    return foundPost;
  } catch (error) {
    return null;
  }
};

export const getAllPostMetadata = async (): Promise<PostData[]> => {
  try {
    return await getSortedPostsData();
  } catch (error) {
    return [];
  }
};
