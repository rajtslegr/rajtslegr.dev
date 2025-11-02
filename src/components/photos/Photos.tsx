import { ReactNode } from 'react';

import PhotoItem from '@/components/photos/PhotoItem';
import { PhotosData } from '@/types/entities';

interface PhotosProps {
  data?: PhotosData;
}

const Photos = ({ data }: PhotosProps) => {
  let render: ReactNode = (
    <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
      Oops! The photos are camera shy right now. Let&apos;s try again later!
    </p>
  );

  if (data?.photos) {
    render = (
      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {data.photos.slice(0, 12).map((photo, index) => (
          <PhotoItem key={photo.id} photo={photo} index={index} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-gray-500">
        Photos
      </h2>
      {render}
    </div>
  );
};

export default Photos;
