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
        <div className="grid xl:grid-cols-2 gap-4">
          {data?.recenttracks?.track?.map((t, i) => {
            if (i < 10) {
              return (
                <div
                  key={i}
                  className="flex flex-col p-2 border rounded border-gray-600 shadow hover:shadow-lg transition"
                >
                  <a href="https://last.fm/user/RajceP" rel="noopener noreferrer" target="_blank">
                    <div className="flex flex-row items-center space-x-2">
                      <img
                        srcSet={`${t.image[0]['#text']} 32w, ${t.image[1]['#text']} 64w, ${t.image[2]['#text']} 128w, ${t.image[3]['#text']} 300w`}
                        sizes="(max-width: 89px) 25vw, 89px"
                        width={89}
                        height={89}
                        alt="Album art"
                        className="border rounded border-gray-600 shadow"
                      />
                      <div className="flex flex-col">
                        <p className="text-lg my-2">{t.name}</p>
                        <p className="text-gray-500 dark:text-gray-400">{t.artist['#text']}</p>
                        <p className="text-gray-500 dark:text-gray-400">{t.album['#text']}</p>
                      </div>
                      {t['@attr']?.nowplaying && (
                        <div className="flex justify-end items-top flex-grow h-12 -z-1 text-red-600 animate-pulse">
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
      <p className="text-4xl my-4">Last.fm</p>
      {render}
    </>
  );
};

export default LastFm;
