import { GetStaticProps, NextPage } from 'next';

import GitHub from '@/components/github/GitHub';
import Instagram from '@/components/instagram/Instagram';
import LastFm from '@/components/last-fm/LastFm';
import MetaData from '@/components/meta-data/MetaData';
import MotionSection from '@/components/motion/MotionSection';
import { getRecentRepos } from '@/lib/github';
import { getRecentPosts } from '@/lib/instagram';
import { GitHubData, InstagramData } from '@/types/entities';

interface DashboardProps {
  gitHubData: GitHubData[];
  instagramData: InstagramData;
}

const Dashboard: NextPage<DashboardProps> = ({ gitHubData, instagramData }) => (
  <>
    <MetaData title="Petr Rajtslegr | Dashboard" />
    <MotionSection>
      <h1 className="mb-4 text-4xl font-extrabold dark:text-gray-100 md:mb-12">
        Dashboard
      </h1>
    </MotionSection>
    <MotionSection delay={0.1}>
      <Instagram data={instagramData} />
    </MotionSection>
    <MotionSection delay={0.2}>
      <LastFm />
    </MotionSection>
    <MotionSection delay={0.3}>
      <GitHub data={gitHubData} />
    </MotionSection>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const [gitHubData, instagramData] = await Promise.all([
    getRecentRepos(),
    getRecentPosts(),
  ]);

  return {
    props: {
      gitHubData,
      instagramData,
    },
    revalidate: 10800,
  };
};

export default Dashboard;
