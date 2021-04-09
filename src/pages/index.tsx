import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import GitHub from '../components/GitGub';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import LastFm from '../components/LastFm';
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
  const gitHubData = await fetch(
    'https://api.github.com/users/rajcep/repos?per_page=6&sort=pushed&direction=desc',
  )
    .then((res) => res.json())
    .catch(() => null);

  const igData = await fetch(
    `https://graph.instagram.com/me/media?fields=id,permalink,media_url,thumbnail_url,caption&access_token=${process.env.INSTAGRAM_TOKEN}`,
  )
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      gitHubData,
      igData,
    },
    revalidate: 10800,
  };
};

export default IndexPage;
