import { getRecentSongs } from '@/lib/last-fm';
import { LastFmData } from '@/types/entities';
import { NextApiRequest, NextApiResponse } from 'next';

const get = async (
  _req: NextApiRequest,
  res: NextApiResponse<LastFmData>,
): Promise<void> => {
  const recentSongsresponse = await getRecentSongs();
  const recentSongs: LastFmData = await recentSongsresponse.json();

  return res.send(recentSongs);
};

export default get;
