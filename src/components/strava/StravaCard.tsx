import { formatSeconds } from '@/utils/date';

import { isRideActivity, isDistanceActivity } from './utils';
import BikeIcon from '../icons/BikeIcon';
import DumbellIcon from '../icons/DumbellIcon';
import ShoeIcon from '../icons/ShoeIcon';
import SoccerBallIcon from '../icons/SoccerBallIcon';

interface StravaCardProps {
  id: number;
  type: string;
  name: string;
  distance: number;
  movingTime: number;
  elevation: number;
  averageSpeed: number;
  averageHeartrate: number;
}

const ActivityIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'Run':
      return <ShoeIcon />;
    case 'WeightTraining':
      return <DumbellIcon />;
    case 'Soccer':
      return <SoccerBallIcon />;
    default:
      return isRideActivity(type) ? <BikeIcon /> : null;
  }
};

const StravaCard = ({
  id,
  type,
  name,
  distance,
  movingTime,
  elevation,
  averageSpeed,
}: StravaCardProps) => (
  <a
    href={`https://www.strava.com/activities/${id}`}
    rel="noopener noreferrer"
    target="_blank"
    className="card-hover group block rounded-md border border-gray-200/30 bg-card-light p-4 dark:border-gray-800/30 dark:bg-card"
  >
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-2">
        <span className="shrink-0 text-gray-500 dark:text-gray-400">
          <ActivityIcon type={type} />
        </span>
        <h3
          className="line-clamp-1 text-base font-medium text-black group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200"
          title={name}
        >
          {name}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        {isDistanceActivity(type) && (
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-500">Distance</p>
            <p className="text-gray-700 dark:text-gray-300">
              {Math.floor((distance / 1000) * 100) / 100} km
            </p>
          </div>
        )}

        <div>
          <p className="text-xs text-gray-500 dark:text-gray-500">Time</p>
          <p className="text-gray-700 dark:text-gray-300">
            {formatSeconds(movingTime)}
          </p>
        </div>

        {isDistanceActivity(type) && (
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Elevation
            </p>
            <p className="text-gray-700 dark:text-gray-300">{elevation} m</p>
          </div>
        )}

        {type === 'Run' && (
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-500">Pace</p>
            <p className="text-gray-700 dark:text-gray-300">
              {String(
                Math.floor((movingTime / 60 / (distance / 1000)) * 100) / 100,
              ).replace('.', ':')}{' '}
              /km
            </p>
          </div>
        )}

        {isRideActivity(type) && (
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Avg Speed
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {Math.floor(averageSpeed * 3.6 * 100) / 100} km/h
            </p>
          </div>
        )}
      </div>
    </div>
  </a>
);

export default StravaCard;
