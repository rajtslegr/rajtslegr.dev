import { ReactNode } from 'react';

import InstagramItem from '@/components/instagram/InstagramItem';
import { InstagramData } from '@/types/entities';

interface InstagramProps {
  data?: InstagramData;
}

const Instagram: React.FC<InstagramProps> = ({ data }) => {
  let render: ReactNode = (
    <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
      Error fetching data from Instagram.
    </p>
  );

  if (data?.data) {
    render = (
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-4 lg:gap-4 xl:grid-cols-6">
        {data?.data
          .filter((_edge, index) => index < 9)
          .map((edge, index) => (
            <InstagramItem key={edge.id} index={index} edge={edge} />
          ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold dark:text-gray-100">Instagram</h2>
      {render}
    </div>
  );
};

export default Instagram;
