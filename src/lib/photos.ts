import type { PhotosData } from '@/types/entities';
import { fetcher } from '@/utils/fetcher';

export const getRecentPhotos = async (): Promise<PhotosData> => {
  return fetcher<PhotosData>('https://photos.rajtslegr.dev/feed.json');
};
