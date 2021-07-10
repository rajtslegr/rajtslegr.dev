import { ILastFmData } from '@/types/types';
import fetcher from '@/utils/fetcher';
import { PlayIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import useSWR from 'swr';

const LastFm: React.FC = () => {
  const IS_DEV = process.env.NODE_ENV === 'development';
  const { data, error } = useSWR<ILastFmData>('api/last-fm', fetcher, {
    refreshInterval: 60000,
  });

  let render: JSX.Element | JSX.Element[] = (
    <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
      Error fetching data from Last.fm.
    </p>
  );

  if (!error) {
    render = (
      <div className="grid gap-4 md:grid-cols-2">
        {new Array(10).fill(undefined).map((_value, i) => {
          return (
            <div
              key={i}
              className="flex flex-col p-2 bg-white rounded shadow h-36 dark:bg-card"
            >
              <div className="flex flex-row space-x-2">
                <div className="w-32 h-32 bg-gray-200 rounded shadow dark:bg-gray-700 animate-pulse"></div>
                <div className="flex flex-col justify-between w-3/5">
                  <div className="w-1/3 h-6 mb-4 bg-gray-200 rounded-sm dark:bg-gray-700 animate-pulse"></div>
                  <div className="w-3/5 h-4 bg-gray-200 rounded-sm dark:bg-gray-700 animate-pulse"></div>
                  <div className="w-3/5 h-4 bg-gray-200 rounded-sm dark:bg-gray-700 animate-pulse"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (!error && data?.recenttracks) {
    render = (
      <>
        <div className="grid gap-4 md:grid-cols-2">
          {data?.recenttracks?.track?.map((t, i) => {
            if (i < 10) {
              return (
                <div
                  key={i}
                  className="flex flex-col h-full p-2 bg-white rounded shadow min-h-36 dark:bg-card"
                >
                  <a
                    href="https://last.fm/user/RajceP"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex flex-row space-x-2">
                      <div className="w-32 h-32 rounded shadow">
                        <Image
                          unoptimized={IS_DEV}
                          className="rounded"
                          src={t.image[2]['#text']}
                          alt="Album art"
                          layout="fixed"
                          width={128}
                          height={128}
                          placeholder="blur"
                          blurDataURL={t.image[0]['#text']}
                        />
                      </div>
                      <div className="flex flex-col min-h-full">
                        <h3 className="text-lg font-semibold dark:text-gray-100">
                          {t.name}
                        </h3>
                        <div className="flex flex-1"></div>
                        <p className="text-gray-500 dark:text-gray-400">
                          {t.artist['#text']}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          {t.album['#text']}
                        </p>
                      </div>
                      {t['@attr']?.nowplaying && (
                        <span className="flex justify-end flex-grow w-12 h-12 text-red-600 items-top animate-pulse">
                          <PlayIcon />
                        </span>
                      )}
                    </div>
                  </a>
                </div>
              );
            }
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="my-4 text-3xl font-bold dark:text-gray-100">Last.fm</h2>
      {render}
    </>
  );
};

export default LastFm;
