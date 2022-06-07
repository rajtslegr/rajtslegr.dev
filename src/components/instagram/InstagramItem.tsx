import { useState } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import { InstagramDataEdge } from '@/types/entities';

interface InstagramItemProps {
  index: number;
  edge: InstagramDataEdge;
}

const InstagramItem: React.FC<InstagramItemProps> = ({ index, edge }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      key={edge.id}
      className={clsx(
        index === 0 ? 'lg:col-span-2 lg:row-span-2' : '',
        !isLoaded
          ? 'rounded-lg bg-gray-200 shadow motion-safe:animate-pulse dark:bg-gray-700'
          : '',
        'relative pb-1/1 ',
      )}
    >
      <a href={edge.permalink} rel="noopener noreferrer" target="_blank">
        <Image
          className="rounded-lg"
          src={edge.thumbnail_url || edge.media_url}
          alt={edge.caption}
          title={edge.caption}
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
