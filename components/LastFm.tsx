import { ILastFmData } from '../types/types';

interface Props {
  data: ILastFmData;
}

const LastFm: React.FC<Props> = ({ data }) => {
  return (
    <>
      <p className="text-2xl m-2 my-4">Last.fm</p>
      <div className="md:grid xl:grid-cols-2">
        {data.recenttracks?.track.map((track) => {
          return (
            <div
              key={parseFloat(track.date.uts)}
              className="flex flex-col m-2 p-2 border rounded border-gray-600 shadow hover:shadow-lg transition"
            >
              <a href="https://last.fm/user/RajceP" rel="noopener noreferrer" target="_blank">
                <div className="flex flex-row items-center space-x-4">
                  <img
                    srcSet={`${track.image[0]['#text']} 32w, ${track.image[1]['#text']} 64w, ${track.image[2]['#text']} 128w, ${track.image[3]['#text']} 300w`}
                    sizes="(max-width: 89px) 89px, 89px"
                    width={89}
                    height={89}
                    alt="Album art"
                    className="border rounded border-gray-600 shadow"
                  />
                  <div className="flex flex-col">
                    <p>{track.name}</p>
                    <p className="text-gray-500 dark:text-gray-400">{track.artist['#text']}</p>
                    <p className="text-gray-500 dark:text-gray-400">{track.album['#text']}</p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LastFm;
