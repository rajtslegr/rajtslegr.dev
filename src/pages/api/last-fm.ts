import { NextApiRequest, NextApiResponse } from 'next';

import { getRecentSongs } from '@/lib/last-fm';
import { LastFmData } from '@/types/entities';

const handler = async (
  _request: NextApiRequest,
  response: NextApiResponse<LastFmData>,
): Promise<void> => {
  const recentSongs = await getRecentSongs();

  return response.send(recentSongs);
};

export default handler;
