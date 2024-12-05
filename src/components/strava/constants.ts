export const RIDE_ACTIVITIES = ['Ride', 'Gravel Ride', 'VirtualRide'] as const;
export const DISTANCE_ACTIVITIES = [...RIDE_ACTIVITIES, 'Run'] as const;

export type RideActivity = (typeof RIDE_ACTIVITIES)[number];
export type DistanceActivity = (typeof DISTANCE_ACTIVITIES)[number];
