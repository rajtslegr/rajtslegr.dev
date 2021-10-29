import { LastFmData } from '@/types/entities';
import fetcher from '@/utils/fetcher';
import { ReactNode } from 'react';
import useSWR from 'swr';
import MotionSection from '../layout/MotionSection';
import LastFmItem from './LastFmItem';
import LastFmSkeleton from './LastFmSkeleton';

const LastFm: React.FC = () => {
  const { data, error } = useSWR<LastFmData>('api/last-fm', fetcher, {
    refreshInterval: 60000,
  });

  let render: ReactNode = (
    <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
      Error fetching data from Last.fm.
    </p>
  );

  if (!error) {
    render = <LastFmSkeleton />;
  }

  if (!error && data?.recenttracks) {
    render = (
      <div className="grid gap-4 m-0 md:grid-cols-2">
        {data?.recenttracks?.track
          ?.filter((_track, index) => index < 10)
          .map((track, index) => (
            <LastFmItem key={index} track={track} />
          ))}
      </div>
    );
  }

  return (
    <>
      <MotionSection delay={0.2}>
        <h2 className="mt-12 mb-4 text-3xl font-bold dark:text-gray-100">
          Last.fm
        </h2>
      </MotionSection>
      {render}
    </>
  );
};

export default LastFm;
