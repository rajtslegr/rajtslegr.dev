import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import GitHub from '../components/GitGub';
import Hero from '../components/Hero';
import LastFm from '../components/LastFm';
import { IGitHubData, ILastFmData } from '../types/types';

interface Props {
  gitHubData: IGitHubData[];
  lastFmData: ILastFmData;
}

const IndexPage: NextPage<Props> = ({ gitHubData, lastFmData }) => {
  console.log(lastFmData);
  return (
    <>
      <Head>
        <title>Petr Rajtslegr | Full-stack Dev</title>
      </Head>
      <Hero />
      <GitHub data={gitHubData} />
      <LastFm data={lastFmData} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const gitHubData = await fetch(
    'https://api.github.com/users/rajcep/repos?per_page=6&sort=pushed&direction=desc',
  ).then((res) => res.json());

  const lastFmData = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rajcep&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10`,
  ).then((res) => res.json());

  return {
    props: {
      gitHubData,
      lastFmData,
    },
    revalidate: 60,
  };
};

export default IndexPage;
