import GitHub from 'components/GitHub';
import Instagram from 'components/Instagram';
import LastFm from 'components/LastFm';
import MetaData from 'components/MetaData';
import { getRecentRepos } from 'lib/github';
import { getRecentPosts } from 'lib/instagram';
import { GetStaticProps, NextPage } from 'next';
import { IGitHubData, IIgData } from 'types/types';

interface Props {
  gitHubData: IGitHubData[];
  igData: IIgData;
}

const Dashboard: NextPage<Props> = ({ gitHubData, igData }) => {
  return (
    <>
      <MetaData title="Petr Rajtslegr | Dashboard" />
      <h1 className="mb-4 text-4xl font-extrabold md:mb-12">Dashboard</h1>
      <Instagram data={igData} />
      <LastFm />
      <GitHub data={gitHubData} />
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

export default Dashboard;
