import AccountSection from './AccountSection';
import RecentRaces from './RecentRaces';
import StatsSection from './StatsSection';
import type {
  IRacingAccountsResponse,
  IRacingCar,
  IRacingDrivingStatisticsResponse,
  IRacingTrack,
} from '@/types/entities';

interface IRacingProps {
  accountsData?: IRacingAccountsResponse;
  statsData?: IRacingDrivingStatisticsResponse;
  carsData?: IRacingCar[];
  tracksData?: IRacingTrack[];
}

const IRacingHeader = () => (
  <h2 className="mt-12 mb-6 text-sm font-medium tracking-widest text-gray-500 uppercase">
    iRacing
  </h2>
);

const EmptyDataMessage = () => (
  <p className="flex justify-center p-6 text-gray-500 italic dark:text-gray-400">
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

const hasAccountData = (accountsData?: IRacingAccountsResponse): boolean => {
  return Boolean(accountsData?.items?.length);
};

const hasRaceStats = (
  statsData?: IRacingDrivingStatisticsResponse,
): boolean => {
  return Boolean(
    statsData?.drivingStatistics?.some((stat) => stat.sessionType === 3),
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

  const showAccounts = hasAccountData(accountsData);
  const showStats = hasRaceStats(statsData);
  const showRecentRaces = showStats && Boolean(carsData) && Boolean(tracksData);

  return (
    <div>
      <IRacingHeader />
      <div className="grid gap-6">
        {showAccounts && (
          <div>
            <AccountSection accountsData={accountsData} />
          </div>
        )}
        {showStats && (
          <div>
            <SectionHeading title="Statistics" />
            <StatsSection statsData={statsData} />
          </div>
        )}
        {showRecentRaces && (
          <div>
            <SectionHeading title="Recent Races" />
            <RecentRaces
              statsData={statsData!}
              carsData={carsData!}
              tracksData={tracksData!}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IRacing;
