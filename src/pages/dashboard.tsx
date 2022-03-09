import { GetStaticProps, NextPage } from 'next';

import GitHub from '@/components/github/GitHub';
import Instagram from '@/components/instagram/Instagram';
import LastFm from '@/components/last-fm/LastFm';
import MotionSection from '@/components/layout/MotionSection';
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
      <MotionSection>
        <h1 className="mb-4 text-4xl font-extrabold md:mb-12 dark:text-gray-100">
          Dashboard
        </h1>
      </MotionSection>
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
