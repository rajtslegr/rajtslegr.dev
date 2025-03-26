import { useState } from 'react';

import { PlayIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Image from 'next/image';

import { LastFmTrack } from '@/types/entities';

interface LastFmItemProps {
  track: LastFmTrack;
}

const LastFmItem = ({ track }: LastFmItemProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="card-hover group rounded-md border border-gray-200/30 bg-card-light dark:border-gray-800/30 dark:bg-card">
      <a
        href={track.url}
        rel="noopener noreferrer"
        target="_blank"
        className="block p-4"
      >
        <div className="flex space-x-3">
          <div className="relative shrink-0">
            <Image
              className={clsx(
                'size-16 rounded-md object-cover sm:size-20',
                !isLoaded && 'bg-gray-100 dark:bg-gray-800',
              )}
              src={track.image[2]['#text']}
              alt="Album art"
              width={80}
              height={80}
              placeholder="blur"
              blurDataURL={`/_next/image?url=${track.image[0]['#text']}&w=16&q=1`}
              onLoad={() => setIsLoaded(true)}
            />
            {track['@attr']?.nowplaying && (
              <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                <PlayIcon className="size-3" />
              </span>
            )}
          </div>

          <div className="flex flex-1 flex-col">
            <h3
              className="mb-1 line-clamp-1 text-base font-medium text-black group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200"
              title={track.name}
            >
              {track.name}
            </h3>

            <div className="flex flex-col text-sm text-gray-600 dark:text-gray-400">
              <p className="line-clamp-1" title={track.artist['#text']}>
                {track.artist['#text']}
              </p>
              <p
                className="line-clamp-1 text-gray-500 dark:text-gray-500"
                title={track.album['#text']}
              >
                {track.album['#text']}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default LastFmItem;
