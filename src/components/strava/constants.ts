// Strava requires a paid subscription for API apps since 2026-06-01, otherwise the
// app is Inactive and every call returns 403 Forbidden. Flip back on once subscribed.
export const STRAVA_ENABLED: boolean = false;

export const RIDE_ACTIVITIES = ['Ride', 'Gravel Ride', 'VirtualRide'] as const;
export const DISTANCE_ACTIVITIES = [...RIDE_ACTIVITIES, 'Run'] as const;

export type RideActivity = (typeof RIDE_ACTIVITIES)[number];
export type DistanceActivity = (typeof DISTANCE_ACTIVITIES)[number];
