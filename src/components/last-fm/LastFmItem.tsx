'use client';

import { PlayIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

import { LastFmTrack } from '@/types/entities';

interface LastFmItemProps {
  track: LastFmTrack;
}

const LastFmItem = ({ track }: LastFmItemProps) => (
  <div className="card-hover group bg-card-light dark:bg-card rounded-md border border-gray-200/30 dark:border-gray-800/30">
    <a
      href={track.url}
      rel="noopener noreferrer"
      target="_blank"
      className="block p-4"
    >
      <div className="flex space-x-3">
        <div className="relative shrink-0">
          <Image
            className="size-16 rounded-md object-cover sm:size-20"
            src={track.image[2]['#text']}
            alt="Album art"
            width={80}
            height={80}
          />
          {track['@attr']?.nowplaying && (
            <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
              <PlayIcon className="ml-0.5 size-3" />
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

export default LastFmItem;
