import { useState } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import { Photo } from '@/types/entities';

interface PhotoItemProps {
  photo: Photo;
  index: number;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ photo, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <a
      href={photo.url}
      rel="noopener noreferrer"
      target="_blank"
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
        src={photo.src.medium}
        alt={photo.title}
        title={photo.title}
        sizes="(max-width: 1024px) 33vw, (max-width: 1280px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL={photo.src.small}
        onLoad={() => setIsLoaded(true)}
      />
    </a>
  );
};

export default PhotoItem;
