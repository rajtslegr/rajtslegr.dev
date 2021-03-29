import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import GitHub from '../components/GitGub';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import LastFm from '../components/LastFm';
import { IGitHubData, IIgData, ILastFmData } from '../types/types';

interface Props {
  gitHubData: IGitHubData[];
  lastFmData: ILastFmData;
  igData: IIgData;
}

const IndexPage: NextPage<Props> = ({ gitHubData, lastFmData, igData }) => {
  return (
    <>
      <Head>
        <title>Petr Rajtslegr | Full-stack Dev</title>
      </Head>
      <Hero />
      <GitHub data={gitHubData} />
      <LastFm data={lastFmData} />
      <Instagram data={igData} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const gitHubData = await fetch(
    'https://api.github.com/users/rajcep/repos?per_page=6&sort=pushed&direction=desc',
  )
    .then((res) => res.json())
    .catch(() => null);

  const lastFmData = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rajcep&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10`,
  )
    .then((res) => res.json())
    .catch(() => null);

  const igData = await fetch(
    'https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"427246549","first":9}',
  )
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      gitHubData,
      lastFmData,
      igData,
    },
    revalidate: 60,
  };
};

export default IndexPage;
