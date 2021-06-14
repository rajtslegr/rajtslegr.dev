import { IIgData } from 'types/types';
import fetcher from 'utils/fetcher';

export const getRecentPosts = async (): Promise<IIgData> => {
  return await fetcher<IIgData>(
    `https://graph.instagram.com/me/media?fields=id,permalink,media_url,thumbnail_url,caption&access_token=${process.env.INSTAGRAM_TOKEN}`,
  );
};
