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
        'relative pb-1/1 ',
        index === 0 && 'lg:col-span-2 lg:row-span-2',
        !isLoaded &&
          'bg-gray-200 dark:bg-gray-700 rounded-lg shadow motion-safe:animate-pulse',
      )}
    >
      <a href={edge.permalink} rel="noopener noreferrer" target="_blank">
        <Image
          className="object-cover rounded-lg"
          fill
          src={edge.thumbnail_url || edge.media_url}
          alt={edge.caption}
          title={edge.caption}
          placeholder="blur"
          blurDataURL={edge.thumbnail_url || edge.media_url}
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </a>
    </div>
  );
};

export default InstagramItem;
