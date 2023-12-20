import { GetStaticProps, NextPage } from 'next';

import GitHub from '@/components/github/GitHub';
import Instagram from '@/components/instagram/Instagram';
import LastFm from '@/components/last-fm/LastFm';
import MetaData from '@/components/meta-data/MetaData';
import MotionSection from '@/components/motion/MotionSection';
import Strava from '@/components/strava/Strava';
import { getRecentRepos } from '@/lib/github';
import { getRecentPosts } from '@/lib/instagram';
import { getActivities } from '@/lib/strava';
import { Activity, GitHubData, InstagramData } from '@/types/entities';

interface DashboardProps {
  gitHubData: GitHubData[];
  instagramData: InstagramData;
  stravaData: Activity[];
}

const Dashboard: NextPage<DashboardProps> = ({
  gitHubData,
  instagramData,
  stravaData,
}) => (
  <>
    <MetaData title="Petr Rajtslegr | Dashboard" />
    <MotionSection>
      <h1 className="mb-4 text-4xl font-extrabold md:mb-12 dark:text-gray-100">
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
      <Strava data={stravaData} />
    </MotionSection>
    <MotionSection delay={0.4}>
      <GitHub data={gitHubData} />
    </MotionSection>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const [gitHubData, instagramData, stravaData] = await Promise.all([
    getRecentRepos(),
    getRecentPosts(),
    getActivities(),
  ]);

  return {
    props: {
      gitHubData,
      instagramData,
      stravaData,
    },
    revalidate: 10800,
  };
};

export default Dashboard;
