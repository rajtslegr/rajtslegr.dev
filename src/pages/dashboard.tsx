import { GetStaticProps, NextPage } from 'next';

import GitHub from '@/components/github/GitHub';
import LastFm from '@/components/last-fm/LastFm';
import MetaData from '@/components/meta-data/MetaData';
import MotionSection from '@/components/motion/MotionSection';
import Photos from '@/components/photos/Photos';
import Strava from '@/components/strava/Strava';
import { getRecentRepos } from '@/lib/github';
import { getRecentPhotos } from '@/lib/photos';
import { getActivities } from '@/lib/strava';
import { Activity, GitHubData, PhotosData } from '@/types/entities';

interface DashboardProps {
  gitHubData: GitHubData[];
  photosData: PhotosData;
  stravaData: Activity[];
}

const Dashboard: NextPage<DashboardProps> = ({
  gitHubData,
  photosData,
  stravaData,
}) => (
  <>
    <MetaData title="Petr Rajtslegr | Dashboard" />
    <MotionSection>
      <h1 className="mb-4 text-4xl font-extrabold dark:text-gray-100 md:mb-12">
        Dashboard
      </h1>
    </MotionSection>
    <MotionSection delay={0.1}>
      <Photos data={photosData} />
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
  const [gitHubData, photosData, stravaData] = await Promise.all([
    getRecentRepos(),
    getRecentPhotos(),
    getActivities(),
  ]);

  return {
    props: {
      gitHubData,
      photosData,
      stravaData,
    },
    revalidate: 10800,
  };
};

export default Dashboard;
