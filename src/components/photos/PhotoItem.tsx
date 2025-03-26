import { useState } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import { Photo } from '@/types/entities';

interface PhotoItemProps {
  photo: Photo;
  index: number;
}

const PhotoItem = ({ photo, index }: PhotoItemProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <a
      href={photo.url}
      rel="noopener noreferrer"
      target="_blank"
      className="group overflow-hidden rounded-md transition-all duration-200"
    >
      <div
        className={clsx(
          'relative aspect-square overflow-hidden',
          !isLoaded && 'bg-gray-100 dark:bg-gray-800',
        )}
      >
        <Image
          className={clsx(
            'object-cover transition-transform duration-500 group-hover:scale-105',
            index === 0 && 'md:size-full',
          )}
          src={photo.src.medium}
          alt={photo.title}
          title={photo.title}
          fill={true}
          sizes="(max-width: 768px) 33vw, 250px"
          placeholder="blur"
          blurDataURL={photo.src.small}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </a>
  );
};

export default PhotoItem;
