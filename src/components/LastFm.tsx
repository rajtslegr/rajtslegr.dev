import Image from 'next/image';
import { ILastFmData } from '../types/types';
interface Props {
  data: ILastFmData;
}

const PlayIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

const LastFm: React.FC<Props> = ({ data }) => {
  let render: JSX.Element | JSX.Element[] = (
    <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
      Error fetching data from Last.fm.
    </p>
  );

  if (data.recenttracks) {
    render = (
      <>
        <div className="grid gap-4 xl:grid-cols-2">
          {data?.recenttracks?.track?.map((t, i) => {
            if (i < 10) {
              return (
                <div
                  key={i}
                  className="flex flex-col p-2 transition border border-gray-200 rounded shadow hover:shadow-lg"
                >
                  <a href="https://last.fm/user/RajceP" rel="noopener noreferrer" target="_blank">
                    <div className="flex flex-row items-center space-x-2">
                      <div className="relative w-24 h-24 border border-gray-200 rounded shadow">
                        <Image
                          src={t.image[3]['#text']}
                          alt="Album art"
                          layout="fill"
                          objectFit="cover"
                          sizes="100%"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="my-2 text-lg">{t.name}</p>
                        <p className="text-gray-500 dark:text-gray-400">{t.artist['#text']}</p>
                        <p className="text-gray-500 dark:text-gray-400">{t.album['#text']}</p>
                      </div>
                      {t['@attr']?.nowplaying && (
                        <div className="flex justify-end flex-grow h-12 text-red-600 items-top -z-1 animate-pulse">
                          {PlayIcon}
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
