import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import GitHub from '../components/GitGub';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import LastFm from '../components/LastFm';
import { getRecentRepos } from '../lib/github';
import { getRecentPosts } from '../lib/instagram';
import { IGitHubData, IIgData } from '../types/types';

interface Props {
  gitHubData: IGitHubData[];
  igData: IIgData;
}

const IndexPage: NextPage<Props> = ({ gitHubData, igData }) => {
  return (
    <>
      <Head>
        <title>Petr Rajtslegr | Full-stack Dev</title>
      </Head>
      <Hero />
      <GitHub data={gitHubData} />
      <LastFm />
      <Instagram data={igData} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const gitHubData = await getRecentRepos();
  const igData = await getRecentPosts();

  return {
    props: {
      gitHubData,
      igData,
    },
    revalidate: 10800,
  };
};

export default IndexPage;
