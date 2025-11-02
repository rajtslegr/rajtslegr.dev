import {
  IRacingAccountsResponse,
  IRacingCar,
  IRacingDrivingStatisticsResponse,
  IRacingTrack,
} from '@/types/entities';

import AccountSection from './AccountSection';
import RecentRaces from './RecentRaces';
import StatsSection from './StatsSection';

interface IRacingProps {
  accountsData?: IRacingAccountsResponse;
  statsData?: IRacingDrivingStatisticsResponse;
  carsData?: IRacingCar[];
  tracksData?: IRacingTrack[];
}

const IRacingHeader = () => (
  <h2 className="mb-6 mt-12 text-sm font-medium uppercase tracking-widest text-gray-500">
    iRacing
  </h2>
);

const EmptyDataMessage = () => (
  <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
    No iRacing data available.
  </p>
);

const SectionHeading = ({ title }: { title: string }) => (
  <h3 className="mb-3 text-xs font-medium text-gray-500">{title}</h3>
);

const hasValidData = (
  accountsData?: IRacingAccountsResponse,
  statsData?: IRacingDrivingStatisticsResponse,
): boolean => {
  return (
    Boolean(accountsData?.items?.length) ||
    Boolean(statsData?.drivingStatistics?.length)
  );
};

const IRacing = ({
  accountsData,
  statsData,
  carsData,
  tracksData,
}: IRacingProps) => {
  if (!hasValidData(accountsData, statsData)) {
    return (
      <div>
        <IRacingHeader />
        <EmptyDataMessage />
      </div>
    );
  }

  const hasRecentRacesData = statsData && carsData && tracksData;

  return (
    <div>
      <IRacingHeader />
      <div className="grid gap-6">
        <div>
          <AccountSection accountsData={accountsData} />
        </div>
        <div>
          <SectionHeading title="Statistics" />
          <StatsSection statsData={statsData} />
        </div>
        {hasRecentRacesData && (
          <div>
            <SectionHeading title="Recent Races" />
            <RecentRaces
              statsData={statsData}
              carsData={carsData}
              tracksData={tracksData}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IRacing;
