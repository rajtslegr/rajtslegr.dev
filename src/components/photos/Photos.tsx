import { ReactNode } from 'react';

import PhotoItem from '@/components/photos/PhotoItem';
import { PhotosData } from '@/types/entities';

interface PhotosProps {
  data?: PhotosData;
}

const Photos: React.FC<PhotosProps> = ({ data }) => {
  let render: ReactNode = (
    <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
      Oops! The photos are camera shy right now. Let&apos;s try again later!
    </p>
  );

  if (data?.photos) {
    render = (
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-4 lg:gap-4">
        {data.photos.slice(0, 9).map((photo, index) => (
          <PhotoItem key={photo.id} photo={photo} index={index} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold dark:text-gray-100">Photos</h2>
      {render}
    </div>
  );
};

export default Photos;
