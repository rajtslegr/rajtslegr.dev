import { NextApiRequest, NextApiResponse } from 'next';

import { withSentry } from '@sentry/nextjs';

import { getRecentSongs } from '@/lib/last-fm';
import { LastFmData } from '@/types/entities';

const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse<LastFmData>,
): Promise<void> => {
  const recentSongsresponse = await getRecentSongs();
  const recentSongs: LastFmData = await recentSongsresponse.json();

  return res.send(recentSongs);
};

export default withSentry(handler);
