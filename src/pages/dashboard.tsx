import { GetStaticProps, NextPage } from 'next';

import { format, subDays } from 'date-fns';

import GitHub from '@/components/github/GitHub';
import IRacing from '@/components/iracing/IRacing';
import LastFm from '@/components/last-fm/LastFm';
import MetaData from '@/components/meta-data/MetaData';
import MotionSection from '@/components/motion/MotionSection';
import Photos from '@/components/photos/Photos';
import Strava from '@/components/strava/Strava';
import { getRecentRepos } from '@/lib/github';
import {
  getCars,
  getDrivingStatistics,
  getLinkedAccounts,
  getTracks,
} from '@/lib/iracing';
import { getRecentPhotos } from '@/lib/photos';
import { getActivities } from '@/lib/strava';
import {
  Activity,
  GitHubData,
  IRacingAccountsResponse,
  IRacingCar,
  IRacingDrivingStatisticsResponse,
  IRacingTrack,
  PhotosData,
} from '@/types/entities';

interface DashboardProps {
  gitHubData: GitHubData[];
  photosData: PhotosData;
  stravaData: Activity[];
  iRacingAccounts: IRacingAccountsResponse;
  iRacingStats: IRacingDrivingStatisticsResponse;
  iRacingCars: IRacingCar[];
  iRacingTracks: IRacingTrack[];
}

const Dashboard: NextPage<DashboardProps> = ({
  gitHubData,
  photosData,
  stravaData,
  iRacingAccounts,
  iRacingStats,
  iRacingCars,
  iRacingTracks,
}) => (
  <>
    <MetaData title="Petr Rajtslegr | Dashboard" />
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-8 inline-block font-normal tracking-tight text-black dark:text-white md:mb-12">
        <span className="text-sm font-medium uppercase tracking-widest text-gray-500">
          Dashboard
        </span>
      </h1>
      <MotionSection delay={0.1} id="photos">
        <Photos data={photosData} />
      </MotionSection>
      <MotionSection delay={0.2} id="music">
        <LastFm />
      </MotionSection>
      <MotionSection delay={0.3} id="strava">
        <Strava data={stravaData} />
      </MotionSection>
      <MotionSection delay={0.4} id="iracing">
        <IRacing
          accountsData={iRacingAccounts}
          statsData={iRacingStats}
          carsData={iRacingCars}
          tracksData={iRacingTracks}
        />
      </MotionSection>
      <MotionSection delay={0.5} id="github">
        <GitHub data={gitHubData} />
      </MotionSection>
    </div>
  </>
);

const calculateStartDate = (): string => {
  const thirtyDaysAgo = subDays(new Date(), 30);
  return format(thirtyDaysAgo, 'yyyy-MM-dd');
};

const fetchIRacingData = async (startDate: string) => {
  const [accounts, stats, cars, tracks] = await Promise.all([
    getLinkedAccounts(true),
    getDrivingStatistics(startDate),
    getCars(),
    getTracks(),
  ]);

  return {
    iRacingAccounts: accounts,
    iRacingStats: stats,
    iRacingCars: cars,
    iRacingTracks: tracks,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const startDate = calculateStartDate();

  const [gitHubData, photosData, stravaData, iRacingData] = await Promise.all([
    getRecentRepos(),
    getRecentPhotos(),
    getActivities(),
    fetchIRacingData(startDate),
  ]);

  return {
    props: {
      gitHubData,
      photosData,
      stravaData,
      ...iRacingData,
    },
    revalidate: 10800,
  };
};

export default Dashboard;
