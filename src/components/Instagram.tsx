import { IIgData } from '@/types/types';

export interface Props {
  data?: IIgData;
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
        {data?.data?.map((e, i) => {
          if (i < 9) {
            return (
              <div
                key={e.id}
                className={`${
                  i === 0 ? 'lg:row-span-2 lg:col-span-2' : null
                } relative transition rounded shadow pb-1/1 hover:shadow-lg`}
              >
                <a href={e.permalink} rel="noopener noreferrer" target="_blank">
                  <div className="absolute object-cover w-full h-full bg-gray-200 rounded animate-pulse dark:bg-gray-600"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="absolute object-cover w-full h-full rounded"
                    src={e.thumbnail_url || e.media_url}
                    alt={e.caption}
                    width={328}
                    height={328}
                  />
                </a>
              </div>
            );
          }
        })}
      </div>
    );
  }

  return (
    <>
      <h2 className="mb-4 text-3xl font-bold">Instagram</h2>
      {render}
    </>
  );
};

export default Instagram;
