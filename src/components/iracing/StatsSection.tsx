import {
  CalendarIcon,
  ClockIcon,
  FlagIcon,
  MapPinIcon,
  TrophyIcon,
  TruckIcon,
  CheckCircleIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

import StatCard from './StatCard';
import type { IRacingDrivingStatisticsResponse } from '@/types/entities';
import { formatSeconds } from '@/utils/date';

interface StatsSectionProps {
  statsData?: IRacingDrivingStatisticsResponse;
}

const StatsSection = ({ statsData }: StatsSectionProps) => {
  if (
    !statsData ||
    !statsData.drivingStatistics ||
    statsData.drivingStatistics.length === 0
  ) {
    return null;
  }

  const raceStats = statsData.drivingStatistics.filter(
    (item) => item.sessionType === 3,
  );

  if (raceStats.length === 0) {
    return (
      <div className="py-4 text-center text-sm text-gray-500">
        No race data available for the last 31 days.
      </div>
    );
  }

  const raceCount = raceStats.length;
  const uniqueCars = new Set(raceStats.map((item) => item.car)).size;
  const uniqueTracks = new Set(raceStats.map((item) => item.track)).size;
  const uniqueDays = new Set(raceStats.map((item) => item.day)).size;

  const totalLaps = raceStats.reduce((acc, item) => acc + item.lapsDriven, 0);
  const cleanLaps = raceStats.reduce(
    (acc, item) => acc + item.cleanLapsDriven,
    0,
  );

  const cleanPercentage =
    totalLaps > 0 ? Math.round((cleanLaps / totalLaps) * 100) : 0;

  const totalTimeOnTrack = raceStats.reduce(
    (acc, item) => acc + item.timeOnTrack,
    0,
  );

  const avgLapsPerRace = raceCount > 0 ? Math.round(totalLaps / raceCount) : 0;

  const formattedTime = formatSeconds(totalTimeOnTrack);

  return (
    <div>
      <p className="mb-3 text-xs text-gray-500 italic">
        Data from the last 31 days
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard
          icon={<TrophyIcon className="size-4 text-green-500" />}
          title="Race Sessions"
          value={raceCount}
        />
        <StatCard
          icon={<TruckIcon className="size-4 text-red-500" />}
          title="Cars Raced"
          value={uniqueCars}
        />
        <StatCard
          icon={<MapPinIcon className="size-4 text-green-500" />}
          title="Tracks Raced"
          value={uniqueTracks}
        />
        <StatCard
          icon={<CalendarIcon className="size-4 text-purple-500" />}
          title="Race Days"
          value={uniqueDays}
        />
        <StatCard
          icon={<FlagIcon className="size-4 text-blue-500" />}
          title="Race Laps"
          value={totalLaps}
        />
        <StatCard
          icon={<CheckCircleIcon className="size-4 text-green-500" />}
          title="Clean Laps"
          value={`${cleanLaps}`}
          suffix={` (${cleanPercentage}%)`}
        />
        <StatCard
          icon={<ClockIcon className="size-4 text-purple-500" />}
          title="Race Time"
          value={formattedTime}
        />
        <StatCard
          icon={<ChartBarIcon className="size-4 text-amber-500" />}
          title="Avg. Laps/Race"
          value={avgLapsPerRace}
        />
      </div>
    </div>
  );
};

export default StatsSection;
