import { ReactNode } from 'react';

import {
  CalendarIcon,
  ClockIcon,
  FlagIcon,
  MapPinIcon,
  TrophyIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

import { IRacingDrivingStatisticsResponse } from '@/types/entities';

interface IRacingStatsProps {
  data?: IRacingDrivingStatisticsResponse;
}

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  suffix?: string;
}

const StatCard = ({ icon, title, value, suffix = '' }: StatCardProps) => (
  <div className="card-hover rounded-md border border-gray-200/30 bg-card-light p-4 dark:border-gray-800/30 dark:bg-card">
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-lg font-semibold text-black dark:text-white">
          {value}
          {suffix && <span className="text-sm text-gray-500">{suffix}</span>}
        </p>
      </div>
    </div>
  </div>
);

const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};

const IRacingStats = ({ data }: IRacingStatsProps) => {
  if (!data || !data.drivingStatistics || data.drivingStatistics.length === 0) {
    return (
      <div>
        <h2 className="mb-6 mt-12 text-sm font-medium uppercase tracking-widest text-gray-500">
          iRacing Stats
        </h2>
        <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
          No recent driving statistics available.
        </p>
      </div>
    );
  }

  const stats = data.drivingStatistics;

  const totalSessions = stats.reduce((acc, item) => acc + item.events, 0);

  const uniqueCars = new Set(stats.map((item) => item.car)).size;
  const uniqueTracks = new Set(stats.map((item) => item.track)).size;
  const uniqueDays = new Set(stats.map((item) => item.day)).size;

  const practiceCount = stats
    .filter((item) => item.sessionType === 1)
    .reduce((acc, item) => acc + item.events, 0);

  const qualifyingCount = stats
    .filter((item) => item.sessionType === 2)
    .reduce((acc, item) => acc + item.events, 0);

  const raceCount = stats
    .filter((item) => item.sessionType === 3)
    .reduce((acc, item) => acc + item.events, 0);

  const totalLaps = stats.reduce((acc, item) => acc + item.lapsDriven, 0);
  const cleanLaps = stats.reduce((acc, item) => acc + item.cleanLapsDriven, 0);
  const cleanPercentage =
    totalLaps > 0 ? Math.round((cleanLaps / totalLaps) * 100) : 0;

  const totalTimeOnTrack = stats.reduce(
    (acc, item) => acc + item.timeOnTrack,
    0,
  );
  const formattedTime = formatTime(totalTimeOnTrack);

  return (
    <div>
      <h2 className="mb-6 mt-12 text-sm font-medium uppercase tracking-widest text-gray-500">
        iRacing Stats
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <StatCard
          icon={<ClockIcon className="size-5 text-blue-500" />}
          title="Total Sessions"
          value={totalSessions}
        />
        <StatCard
          icon={<TruckIcon className="size-5 text-red-500" />}
          title="Unique Cars"
          value={uniqueCars}
        />
        <StatCard
          icon={<MapPinIcon className="size-5 text-green-500" />}
          title="Unique Tracks"
          value={uniqueTracks}
        />
        <StatCard
          icon={<CalendarIcon className="size-5 text-purple-500" />}
          title="Active Days"
          value={uniqueDays}
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          icon={<ClockIcon className="size-5 text-gray-500" />}
          title="Practice Sessions"
          value={practiceCount}
        />
        <StatCard
          icon={<ClockIcon className="size-5 text-amber-500" />}
          title="Qualifying Sessions"
          value={qualifyingCount}
        />
        <StatCard
          icon={<TrophyIcon className="size-5 text-green-500" />}
          title="Race Sessions"
          value={raceCount}
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          icon={<FlagIcon className="size-5 text-blue-500" />}
          title="Total Laps"
          value={totalLaps}
        />
        <StatCard
          icon={<FlagIcon className="size-5 text-green-500" />}
          title="Clean Laps"
          value={`${cleanLaps}`}
          suffix={` (${cleanPercentage}%)`}
        />
        <StatCard
          icon={<ClockIcon className="size-5 text-purple-500" />}
          title="Time on Track"
          value={formattedTime}
        />
      </div>
    </div>
  );
};

export default IRacingStats;
