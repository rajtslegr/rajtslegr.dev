import GitHub from '@/components/github/GitHub';
import IRacing from '@/components/iracing/IRacing';
import LastFm from '@/components/last-fm/LastFm';
import MotionSection from '@/components/motion/MotionSection';
import Photos from '@/components/photos/Photos';
import StravaWrapper from '@/components/strava/StravaWrapper';
import type {
  Activity,
  GitHubData,
  IRacingAccountsResponse,
  IRacingCar,
  IRacingDrivingStatisticsResponse,
  IRacingTrack,
  PhotosData,
} from '@/types/entities';

import Layout from './Layout';

interface DashboardContentProps {
  photosData?: PhotosData;
  stravaData?: Activity[];
  gitHubData?: GitHubData[];
  iRacingAccounts?: IRacingAccountsResponse;
  iRacingStats?: IRacingDrivingStatisticsResponse;
  iRacingCars?: IRacingCar[];
  iRacingTracks?: IRacingTrack[];
}

export default function DashboardContent({
  photosData,
  stravaData,
  gitHubData,
  iRacingAccounts,
  iRacingStats,
  iRacingCars,
  iRacingTracks,
}: DashboardContentProps) {
  return (
    <Layout pathname="/dashboard">
      <main>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 inline-block font-normal tracking-tight text-black md:mb-12 dark:text-white">
            <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">
              Dashboard
            </span>
          </h1>
          <div id="photos">
            <MotionSection delay={0.1}>
              <Photos data={photosData} />
            </MotionSection>
          </div>
          <div id="music">
            <MotionSection delay={0.2}>
              <LastFm />
            </MotionSection>
          </div>
          <div id="strava">
            <MotionSection delay={0.3}>
              <StravaWrapper data={stravaData} />
            </MotionSection>
          </div>
          <div id="iracing">
            <MotionSection delay={0.4}>
              <IRacing
                accountsData={iRacingAccounts}
                statsData={iRacingStats}
                carsData={iRacingCars}
                tracksData={iRacingTracks}
              />
            </MotionSection>
          </div>
          <div id="github">
            <MotionSection delay={0.5}>
              <GitHub data={gitHubData} />
            </MotionSection>
          </div>
        </div>
      </main>
    </Layout>
  );
}
