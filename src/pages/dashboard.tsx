import GitHub from '@/components/GitHub';
import Instagram from '@/components/Instagram';
import LastFm from '@/components/LastFm';
import MetaData from '@/components/MetaData';
import { getRecentRepos } from '@/lib/github';
import { getRecentPosts } from '@/lib/instagram';
import { GitHubData, InstagramData } from '@/types/entities';
import { GetStaticProps, NextPage } from 'next';
interface Props {
  gitHubData: GitHubData[];
  instagramData: InstagramData;
}

const Dashboard: NextPage<Props> = ({ gitHubData, instagramData: igData }) => (
  <>
    <MetaData title="Petr Rajtslegr | Dashboard" />
    <div className="space-y-4 sm:space-y-12">
      <h1 className="mb-4 text-4xl font-extrabold md:mb-12 dark:text-gray-100">
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
