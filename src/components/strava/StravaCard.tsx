import { formatSeconds } from '@/utils/date';

import BikeIcon from '../icons/BikeIcon';
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
  averageHeartrate,
}) => (
  <div className="flex flex-col gap-4 overflow-hidden rounded-lg bg-white p-2 shadow dark:bg-card">
    <div className="flex flex-row dark:text-gray-100">
      <h3 className="truncate text-lg font-semibold" title={name}>
        {type === 'Run' ? <ShoeIcon /> : <BikeIcon />}
      </h3>
    </div>
    <div className="flex flex-col dark:text-gray-100">
      <p>
        <span className="text-gray-500 dark:text-gray-400">Distance: </span>
        {Math.floor((distance / 1000) * 100) / 100} km
      </p>
      <p>
        <span className="text-gray-500 dark:text-gray-400">Time: </span>
        {formatSeconds(movingTime)}
      </p>
      <p>
        <span className="text-gray-500 dark:text-gray-400">Elevation: </span>
        {elevation} m
      </p>
      {type === 'Run' && (
        <p>
          <span className="text-gray-500 dark:text-gray-400">Pace: </span>
          {String(
            Math.floor((movingTime / 60 / (distance / 1000)) * 100) / 100,
          ).replace('.', ':')}{' '}
          /km
        </p>
      )}
      {type === 'Ride' && (
        <p>
          <span className="text-gray-500 dark:text-gray-400">
            Average speed:{' '}
          </span>
          {Math.floor(averageSpeed * 3.6 * 100) / 100} km/h
        </p>
      )}
      <p>
        <span className="text-gray-500 dark:text-gray-400">
          Average heart rate:{' '}
        </span>
        {Math.floor(averageHeartrate)} bpm
      </p>
    </div>
  </div>
);

export default StravaCard;
