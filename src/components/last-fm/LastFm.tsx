'use client';

import { ReactNode } from 'react';

import useSWR from 'swr';

import LastFmItem from '@/components/last-fm/LastFmItem';
import LastFmSkeleton from '@/components/last-fm/LastFmSkeleton';
import { LastFmData } from '@/types/entities';
import { fetcher } from '@/utils/fetcher';

const LastFm = () => {
  const { data, error } = useSWR<LastFmData>('/api/last-fm', fetcher, {
    refreshInterval: 60000,
    suspense: false,
    revalidateOnFocus: false,
  });

  let render: ReactNode = <LastFmSkeleton />;

  if (error) {
    render = (
      <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
        Hmm, the music data isn&apos;t playing nice. Give it another spin in a
        bit!
      </p>
    );
  }

  if (data?.recenttracks) {
    render = (
      <div className="grid gap-4 md:grid-cols-2">
        {data.recenttracks.track
          ?.filter((_track, index) => index < 6)
          .map((track) => (
            <LastFmItem key={track?.date?.uts || 0} track={track} />
          ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-6 mt-12 text-sm font-medium uppercase tracking-widest text-gray-500">
        Last.fm
      </h2>
      {render}
    </div>
  );
};

export default LastFm;
