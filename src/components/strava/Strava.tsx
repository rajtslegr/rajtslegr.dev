'use client';

import { ReactNode } from 'react';

import { Activity } from '@/types/entities';

import StravaCard from './StravaCard';

interface StravaProps {
  data?: Activity[];
}

const Strava = ({ data }: StravaProps) => {
  let render: ReactNode = (
    <p className="flex justify-center p-6 text-gray-500 italic dark:text-gray-400">
      Strava data hit a bump in the road. It&apos;ll be back on track soon!
    </p>
  );

  if (Array.isArray(data)) {
    render = (
      <div className="grid gap-4 md:grid-cols-2">
        {data?.map(
          ({
            id,
            type,
            name,
            distance,
            moving_time,
            total_elevation_gain,
            average_speed,
            average_heartrate,
          }) => (
            <StravaCard
              key={id}
              id={id}
              type={type}
              name={name}
              distance={distance}
              movingTime={moving_time}
              elevation={total_elevation_gain}
              averageSpeed={average_speed}
              averageHeartrate={average_heartrate}
            />
          ),
        )}
      </div>
    );
  }

  return (
    <div>
      <h2 className="mt-12 mb-6 text-sm font-medium tracking-widest text-gray-500 uppercase">
        Strava
      </h2>
      {render}
    </div>
  );
};

export default Strava;
