import { InstagramData } from '@/types/entities';
import fetcher from '@/utils/fetcher';

export const getRecentPosts = async (): Promise<InstagramData> => {
  const { data } = await fetcher<InstagramData>(
    `https://graph.instagram.com/me/media?fields=id,permalink,media_url,thumbnail_url,caption&access_token=${process.env.INSTAGRAM_TOKEN}`,
  );

  for (const image of data) {
    if (image.media_url)
      image.media_url = image.media_url?.replace(
        /^[^.]*/,
        'https://scontent-lga3-1',
      );
    if (image.thumbnail_url)
      image.thumbnail_url = image.thumbnail_url?.replace(
        /^[^.]*/,
        'https://scontent-lga3-1',
      );
  }

  return { data };
};
