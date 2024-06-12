import { GetStaticProps, NextPage } from 'next';

import GitHub from '@/components/github/GitHub';
import LastFm from '@/components/last-fm/LastFm';
import MetaData from '@/components/meta-data/MetaData';
import MotionSection from '@/components/motion/MotionSection';
import Strava from '@/components/strava/Strava';
import { getRecentRepos } from '@/lib/github';
import { getActivities } from '@/lib/strava';
import { Activity, GitHubData, InstagramData } from '@/types/entities';

interface DashboardProps {
  gitHubData: GitHubData[];
  instagramData: InstagramData;
  stravaData: Activity[];
}

const Dashboard: NextPage<DashboardProps> = ({ gitHubData, stravaData }) => (
  <>
    <MetaData title="Petr Rajtslegr | Dashboard" />
    <MotionSection>
      <h1 className="mb-4 text-4xl font-extrabold dark:text-gray-100 md:mb-12">
        Dashboard
      </h1>
    </MotionSection>
    {/* <MotionSection delay={0.1}>
      <Instagram data={instagramData} />
    </MotionSection> */}
    <MotionSection delay={0.1}>
      <LastFm />
    </MotionSection>
    <MotionSection delay={0.2}>
      <Strava data={stravaData} />
    </MotionSection>
    <MotionSection delay={0.3}>
      <GitHub data={gitHubData} />
    </MotionSection>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const [gitHubData, stravaData] = await Promise.all([
    getRecentRepos(),
    getActivities(),
  ]);

  return {
    props: {
      gitHubData,
      stravaData,
    },
    revalidate: 10800,
  };
};

export default Dashboard;
