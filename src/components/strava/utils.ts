import {
  RIDE_ACTIVITIES,
  DISTANCE_ACTIVITIES,
  type RideActivity,
  type DistanceActivity,
} from './constants';

export const isRideActivity = (type: string): type is RideActivity =>
  (RIDE_ACTIVITIES as readonly string[]).includes(type);
export const isDistanceActivity = (type: string): type is DistanceActivity =>
  (DISTANCE_ACTIVITIES as readonly string[]).includes(type);
