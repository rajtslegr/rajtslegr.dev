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
    <a
      href={edge.permalink}
      rel="noopener noreferrer"
      target="_blank"
      key={edge.id}
      className={clsx(
        'relative pb-1/1 motion-safe:transition-all motion-safe:hover:scale-105',
        index === 0 && 'lg:col-span-2 lg:row-span-2',
        !isLoaded &&
          'rounded-lg bg-gray-200 shadow motion-safe:animate-pulse dark:bg-gray-700',
      )}
    >
      <Image
        className="rounded-lg object-cover"
        fill={true}
        src={edge.media_url}
        alt={edge.caption}
        title={edge.caption}
        sizes="(max-width: 1024px) 33vw, (max-width: 1280px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL={edge.media_url}
        onLoadingComplete={() => setIsLoaded(true)}
      />
    </a>
  );
};

export default InstagramItem;
