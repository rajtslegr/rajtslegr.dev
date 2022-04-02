import { useState } from "react";

import { PlayIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import Image from "next/image";

import { LastFmTrack } from "@/types/entities";

interface Props {
  track: LastFmTrack;
}

const LastFmItem: React.FC<Props> = ({ track }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex h-full flex-col rounded-lg bg-white p-2 shadow dark:bg-card">
      <a
        href="https://last.fm/user/RajceP"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="flex flex-row space-x-2">
          <div
            className={clsx(
              !isLoaded
                ? "rounded-lg bg-gray-200 shadow motion-safe:animate-pulse dark:bg-gray-700"
                : "",
              "h-32 w-32 rounded-lg shadow"
            )}
          >
            <Image
              className="rounded-lg"
              src={track.image[2]["#text"]}
              alt="Album art"
              layout="fixed"
              width={128}
              height={128}
              placeholder="blur"
              blurDataURL={track.image[0]["#text"]}
              onLoadingComplete={() => setIsLoaded(true)}
            />
          </div>
          <div className="flex min-h-full flex-col">
            <h3 className="text-lg font-semibold dark:text-gray-100">
              {track.name}
            </h3>
            <div className="flex flex-1"></div>
            <p className="text-gray-500 dark:text-gray-400">
              {track.artist["#text"]}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              {track.album["#text"]}
            </p>
          </div>
          {track["@attr"]?.nowplaying && (
            <span className="flex h-12 w-12 grow justify-end text-red-600 motion-safe:animate-pulse">
              <PlayIcon />
            </span>
          )}
        </div>
      </a>
    </div>
  );
};

export default LastFmItem;
