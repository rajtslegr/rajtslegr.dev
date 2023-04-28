import { InstagramData } from '@/types/entities';
import { fetcher } from '@/utils/fetcher';

export const getRecentPosts = async (): Promise<InstagramData> => {
  return fetcher<InstagramData>(
    `https://graph.instagram.com/me/media?fields=id,permalink,media_url,thumbnail_url,caption&access_token=${process.env.INSTAGRAM_TOKEN}`,
  );
};
