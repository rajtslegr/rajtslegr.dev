import { RIDE_ACTIVITIES, DISTANCE_ACTIVITIES } from './constants';

export const isRideActivity = (type: string) =>
  RIDE_ACTIVITIES.includes(type as any);
export const isDistanceActivity = (type: string) =>
  DISTANCE_ACTIVITIES.includes(type as any);
