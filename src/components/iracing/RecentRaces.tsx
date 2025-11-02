import {
  IRacingCar,
  IRacingDrivingStatisticsResponse,
  IRacingTrack,
} from '@/types/entities';

interface RecentRacesProps {
  statsData: IRacingDrivingStatisticsResponse;
  carsData: IRacingCar[];
  tracksData: IRacingTrack[];
}

const RecentRaces = ({ statsData, carsData, tracksData }: RecentRacesProps) => {
  const races = statsData.drivingStatistics.filter(
    (stat) => stat.sessionType === 3,
  );

  const sortedRaces = [...races].sort(
    (a, b) => new Date(b.day).getTime() - new Date(a.day).getTime(),
  );

  const recentRaces = sortedRaces.slice(0, 5);

  if (recentRaces.length === 0) {
    return null;
  }

  const getCarName = (carId: number) => {
    const foundCar = carsData.find((carItem) => carItem.id === carId);
    return foundCar ? foundCar.name : `Car #${carId}`;
  };

  const getTrackInfo = (trackId: number) => {
    const track = tracksData.find((trackItem) => trackItem.id === trackId);
    if (!track) return { name: `Track #${trackId}`, variant: '' };

    return {
      name: track.name,
      variant: track.variant,
    };
  };

  return (
    <div>
      <div className="grid gap-3">
        {recentRaces.map((race) => {
          const carName = getCarName(race.car);
          const trackInfo = getTrackInfo(race.track);

          return (
            <div
              key={`${race.day}-${race.car}-${race.track}`}
              className="rounded-md border border-gray-200/30 bg-card-light p-4 dark:border-gray-800/30 dark:bg-card"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="mb-1 sm:mb-0">
                  <div className="mb-0.5 text-xs text-gray-500">Car</div>
                  <div className="text-sm font-medium text-black dark:text-white">
                    {carName}
                  </div>
                </div>

                <div>
                  <div className="mb-0.5 text-xs text-gray-500">Track</div>
                  <div className="text-sm font-medium text-black dark:text-white">
                    {trackInfo.name}
                    {trackInfo.variant && (
                      <span className="ml-1 text-xs text-gray-500">
                        ({trackInfo.variant})
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentRaces;
