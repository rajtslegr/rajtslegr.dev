import { getRecentSongs } from 'lib/last-fm';
import { NextApiRequest, NextApiResponse } from 'next';
import { ILastFmData } from 'types/types';

const get = async (
  _req: NextApiRequest,
  res: NextApiResponse<ILastFmData>,
): Promise<void> => {
  const recentSongsresponse = await getRecentSongs();
  const recentSongs: ILastFmData = await recentSongsresponse.json();

  return res.send(recentSongs);
};

export default get;
