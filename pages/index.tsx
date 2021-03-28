import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import GitHub from '../components/GitGub';
import { IGitHubData, ILastFmData } from '../types/types';

interface Props {
  gitHubData: IGitHubData[];
  lastFmData: ILastFmData;
}

const IndexPage: NextPage<Props> = ({ gitHubData, lastFmData }) => {
  return (
    <>
      <Head>
        <title>Petr Rajtslegr | Full-stack Dev</title>
      </Head>
      <div className="flex flex-col lg:flex-row lg:justify-around items-center">
        <img
          srcSet="/hero-1.jpg 164w, /hero-2.jpg 328w, /hero-3.jpg 658w"
          sizes="(max-width: 328px) 95vw, 328px"
          alt="Hero"
          className="rounded-full shadow-xl"
        ></img>
        <div className="hidden 2xl:block m-6">
          <p className="text-4xl mb-4">Petr Rajtslegr</p>
          <p className="text-2xl">Hello, I&apos;m Petr Rajtslegr&nbsp;</p>
          <p className="text-2xl">
            I am developer based in Prague, Czech Republic and I love to create things!
          </p>
        </div>
      </div>
      <GitHub data={gitHubData} />
      <div className="flex flex-col m-2">
        <p className="text-2xl my-2">Latest played track:</p>
        <div className="flex flex-row items-center space-x-4">
          <img
            srcSet={`${lastFmData.recenttracks.track[0].image[0]['#text']} 32w, ${lastFmData.recenttracks.track[0].image[1]['#text']} 64w, ${lastFmData.recenttracks.track[0].image[2]['#text']} 128w, ${lastFmData.recenttracks.track[0].image[3]['#text']} 300w`}
            sizes="(max-width: 64px) 64px, 64px"
            alt="Album art"
            className="border rounded"
          />
          <div className="flex flex-col">
            <p>{lastFmData.recenttracks.track[0].name}</p>
            <p className="text-gray-500 dark:text-gray-400">
              {lastFmData.recenttracks.track[0].artist['#text']}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              {lastFmData.recenttracks.track[0].album['#text']}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const gitHubData = await fetch(
    'https://api.github.com/users/rajcep/repos?per_page=6&sort=pushed&direction=desc',
  ).then((res) => res.json());

  const lastFmData = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rajcep&api_key=${process.env.LASTFM_API_KEY}&format=json`,
  ).then((res) => res.json());

  return {
    props: {
      gitHubData,
      lastFmData,
    },
    revalidate: 3600,
  };
};

export default IndexPage;
