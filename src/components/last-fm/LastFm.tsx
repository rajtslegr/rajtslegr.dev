import LastFmItem from '@/components/last-fm/LastFmItem';
import LastFmSkeleton from '@/components/last-fm/LastFmSkeleton';
import usePollingFetch from '@/hooks/usePollingFetch';
import type { LastFmData } from '@/types/entities';

const LASTFM_URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rajcep&api_key=${import.meta.env.PUBLIC_LASTFM_API_KEY}&format=json&limit=6`;

const LastFm = () => {
  const { data, error, isLoading } = usePollingFetch<LastFmData>(LASTFM_URL, {
    intervalMs: 60_000,
  });

  if (isLoading) {
    return (
      <div>
        <h2 className="mt-12 mb-6 text-sm font-medium tracking-widest text-gray-500 uppercase">
          Last.fm
        </h2>
        <LastFmSkeleton />
      </div>
    );
  }

  if (error || !data?.recenttracks) {
    return (
      <div>
        <h2 className="mt-12 mb-6 text-sm font-medium tracking-widest text-gray-500 uppercase">
          Last.fm
        </h2>
        <p className="flex justify-center p-6 text-gray-500 italic dark:text-gray-400">
          Hmm, the music data isn&apos;t playing nice. Give it another spin in a
          bit!
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mt-12 mb-6 text-sm font-medium tracking-widest text-gray-500 uppercase">
        Last.fm
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {data.recenttracks.track
          ?.filter((_track, index) => index < 6)
          .map((track) => (
            <LastFmItem key={track?.date?.uts || 0} track={track} />
          ))}
      </div>
    </div>
  );
};

export default LastFm;
