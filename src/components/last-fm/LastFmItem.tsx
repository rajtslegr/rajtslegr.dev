import { useState } from 'react';

import { PlayIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Image from 'next/image';

import { LastFmTrack } from '@/types/entities';

interface LastFmItemProps {
  track: LastFmTrack;
}

const LastFmItem: React.FC<LastFmItemProps> = ({ track }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex overflow-hidden flex-col p-2 h-full bg-white dark:bg-card rounded-lg shadow">
      <a href={track.url} rel="noopener noreferrer" target="_blank">
        <div className="flex flex-row space-x-2">
          <Image
            className={clsx(
              'w-24 h-24 rounded-lg shadow sm:w-32 sm:h-32',
              !isLoaded &&
                'bg-gray-200 dark:bg-gray-700 rounded-lg shadow motion-safe:animate-pulse',
            )}
            src={track.image[2]['#text']}
            alt="Album art"
            width={128}
            height={128}
            placeholder="blur"
            blurDataURL={track.image[0]['#text']}
            onLoadingComplete={() => setIsLoaded(true)}
          />
          <div className="flex overflow-hidden flex-col min-h-full">
            <h3
              className="text-lg font-semibold dark:text-gray-100 line-clamp-3"
              title={track.name}
            >
              {track.name}
            </h3>
            <div className="flex flex-1"></div>
            <p
              className="text-gray-500 dark:text-gray-400 truncate"
              title={track.artist['#text']}
            >
              {track.artist['#text']}
            </p>
            <p
              className="text-gray-500 dark:text-gray-400 truncate"
              title={track.album['#text']}
            >
              {track.album['#text']}
            </p>
          </div>
          {track['@attr']?.nowplaying && (
            <span className="flex grow justify-end w-12 h-12 text-red-600 motion-safe:animate-pulse">
              <PlayIcon />
            </span>
          )}
        </div>
      </a>
    </div>
  );
};

export default LastFmItem;
