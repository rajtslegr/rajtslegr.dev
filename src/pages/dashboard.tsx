import { GetStaticProps, NextPage } from 'next';

import GitHub from '@/components/github/GitHub';
import Instagram from '@/components/instagram/Instagram';
import LastFm from '@/components/last-fm/LastFm';
import MetaData from '@/components/meta-data/MetaData';
import { getRecentRepos } from '@/lib/github';
import { getRecentPosts } from '@/lib/instagram';
import { GitHubData, InstagramData } from '@/types/entities';

interface Props {
  gitHubData: GitHubData[];
  instagramData: InstagramData;
}

const Dashboard: NextPage<Props> = ({ gitHubData, instagramData: igData }) => (
  <>
    <MetaData title="Petr Rajtslegr | Dashboard" />
    <div className="">
      <h1 className="mb-4 text-4xl font-extrabold dark:text-gray-100 md:mb-12">
        Dashboard
      </h1>
      <Instagram data={igData} />
      <LastFm />
      <GitHub data={gitHubData} />
    </div>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const gitHubData = await getRecentRepos();
  const instagramData = await getRecentPosts();

  return {
    props: {
      gitHubData,
      instagramData,
    },
    revalidate: 10800,
  };
};

export default Dashboard;
