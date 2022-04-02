import { useState } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import { InstagramDataEdge } from '@/types/entities';

export interface Props {
  index: number;
  edge: InstagramDataEdge;
}

const InstagramItem: React.FC<Props> = ({ index, edge }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      key={edge.id}
      className={clsx(
        index === 0 ? 'lg:col-span-2 lg:row-span-2' : '',
        !isLoaded
          ? 'bg-gray-200 dark:bg-gray-700 rounded-lg shadow motion-safe:animate-pulse'
          : '',
        'relative pb-1/1 ',
      )}
    >
      <a href={edge.permalink} rel="noopener noreferrer" target="_blank">
        <Image
          className="rounded-lg"
          src={edge.thumbnail_url || edge.media_url}
          alt={edge.caption}
          placeholder="blur"
          blurDataURL={edge.thumbnail_url || edge.media_url}
          layout="fill"
          objectFit="cover"
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </a>
    </div>
  );
};

export default InstagramItem;
