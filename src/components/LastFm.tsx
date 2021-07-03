import { PlayIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';
import useSWR from 'swr';
import { ILastFmData } from 'types/types';
import fetcher from 'utils/fetcher';

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
      <div className="grid gap-4 xl:grid-cols-2">
        {new Array(10).fill(undefined).map((_value, i) => {
          return (
            <div
              key={i}
              className="flex flex-col p-2 transition bg-white border rounded shadow h-36 dark:bg-card"
            >
              <div className="flex flex-row space-x-2">
                <div className="w-32 h-32 bg-gray-200 border rounded shadow animate-pulse"></div>
                <div className="flex flex-col justify-between w-3/5">
                  <div className="w-1/3 h-6 mb-4 bg-gray-200 rounded-sm animate-pulse"></div>
                  <div className="w-3/5 h-4 bg-gray-200 rounded-sm animate-pulse"></div>
                  <div className="w-3/5 h-4 bg-gray-200 rounded-sm animate-pulse"></div>
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
        <div className="grid gap-4 xl:grid-cols-2">
          {data?.recenttracks?.track?.map((t, i) => {
            if (i < 10) {
              return (
                <div
                  key={i}
                  className="flex flex-col p-2 transition bg-white rounded shadow min-h-36 hover:shadow-lg dark:bg-card"
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
                          className="border-gray-200 rounded"
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
                        <p className="text-lg">{t.name}</p>
                        <div className="flex flex-1"></div>
                        <p className="text-gray-500 dark:text-gray-400">
                          {t.artist['#text']}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          {t.album['#text']}
                        </p>
                      </div>
                      {t['@attr']?.nowplaying && (
                        <div className="flex justify-end flex-grow w-12 h-12 text-red-600 items-top -z-1 animate-pulse">
                          <PlayIcon />
                        </div>
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
      <p className="my-4 text-4xl">Last.fm</p>
      {render}
    </>
  );
};

export default LastFm;
