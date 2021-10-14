import { InstagramData } from '@/types/entities';
import Image from 'next/image';

export interface Props {
  data?: InstagramData;
}

const Instagram: React.FC<Props> = ({ data }) => {
  let render: JSX.Element | JSX.Element[] = (
    <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
      Error fetching data from Instagram.
    </p>
  );

  if (data?.data) {
    render = (
      <div className="grid grid-cols-3 gap-2 lg:gap-4 lg:grid-cols-4 xl:grid-cols-6">
        {data?.data
          ?.filter((_edge, index) => index < 9)
          .map((edge, index) => (
            <div
              key={edge.id}
              className={`${
                index === 0 ? 'lg:row-span-2 lg:col-span-2' : null
              } relative rounded shadow pb-1/1 `}
            >
              <a
                href={edge.permalink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  className="rounded"
                  src={edge.thumbnail_url || edge.media_url}
                  alt={edge.caption}
                  placeholder="blur"
                  blurDataURL={edge.thumbnail_url || edge.media_url}
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </div>
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
