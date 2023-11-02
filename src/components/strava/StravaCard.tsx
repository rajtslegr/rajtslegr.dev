import { formatSeconds } from '@/utils/date';

import BikeIcon from '../icons/BikeIcon';
import DumbellIcon from '../icons/DumbellIcon';
import ShoeIcon from '../icons/ShoeIcon';

interface IGitHubCard {
  type: string;
  name: string;
  distance: number;
  movingTime: number;
  elevation: number;
  averageSpeed: number;
  averageHeartrate: number;
}

const StravaCard: React.FC<IGitHubCard> = ({
  type,
  name,
  distance,
  movingTime,
  elevation,
  averageSpeed,
}) => (
  <div className="flex flex-col gap-4 overflow-hidden rounded-lg bg-white p-2 shadow dark:bg-card">
    <div className="flex flex-row dark:text-gray-100">
      <h3
        className="flex flex-row items-center space-x-2 truncate text-lg font-semibold"
        title={name}
      >
        {type === 'Run' && <ShoeIcon />}
        {type === 'WeightTraining' && <DumbellIcon />}
        {['Ride', 'Gravel Ride'].includes(type) && <BikeIcon />}
        <p>{name}</p>
      </h3>
    </div>
    <div className="flex flex-col dark:text-gray-100">
      {['Ride', 'Gravel Ride', 'Run'].includes(type) && (
        <p>
          <span className="text-gray-500 dark:text-gray-400">Distance: </span>
          {Math.floor((distance / 1000) * 100) / 100} km
        </p>
      )}
      <p>
        <span className="text-gray-500 dark:text-gray-400">Time: </span>
        {formatSeconds(movingTime)}
      </p>
      {['Ride', 'Gravel Ride', 'Run'].includes(type) && (
        <p>
          <span className="text-gray-500 dark:text-gray-400">Elevation: </span>
          {elevation} m
        </p>
      )}
      {type === 'Run' && (
        <p>
          <span className="text-gray-500 dark:text-gray-400">Pace: </span>
          {String(
            Math.floor((movingTime / 60 / (distance / 1000)) * 100) / 100,
          ).replace('.', ':')}{' '}
          /km
        </p>
      )}
      {['Ride', 'Gravel Ride'].includes(type) && (
        <p>
          <span className="text-gray-500 dark:text-gray-400">
            Average speed:{' '}
          </span>
          {Math.floor(averageSpeed * 3.6 * 100) / 100} km/h
        </p>
      )}
    </div>
  </div>
);

export default StravaCard;
