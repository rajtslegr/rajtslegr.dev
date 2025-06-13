import { ReactElement, JSXElementConstructor } from 'react';

export interface Photo {
  id: string;
  title: string;
  description: string;
  url: string;
  make: string;
  model: string;
  tags?: string[];
  takenAtNaive: string;
  src: {
    small: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
    large: {
      url: string;
      width: number;
      height: number;
    };
  };
}

export interface PhotosData {
  meta: {
    title: string;
    url: string;
    description: string;
  };
  photos: Photo[];
}

export interface GitHubData {
  node_id: string;
  full_name: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  watchers_count: number;
}

export interface LastFmTrack {
  '@attr'?: { nowplaying: boolean };
  mbid: string;
  url: string;
  name: string;
  date: { uts: string; '#text': string };
  album: { '#text': string };
  artist: { '#text': string };
  image: { '#text': string }[];
}
export interface LastFmData {
  recenttracks: {
    track: LastFmTrack[];
  };
}

export interface ProjectData {
  title: string;
  description: string;
  build: string[];
  image: string;
  live?: string;
  repo?: string;
}

export interface PostData {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  readingTime?: ReadTime;
  views?: string;
}

export interface PostId {
  params: {
    id: PostData['id'];
  };
}

export interface ContentPostData extends PostData {
  mdxContent: ReactElement<unknown, string | JSXElementConstructor<any>>;
}

export interface ReadTime {
  text: string;
  time: number;
  words: number;
  minutes: number;
}

export interface TimelineData {
  timeRange: string;
  job: string;
  description?: string;
}

export interface Activity {
  id: number;
  resource_state: number;
  external_id: any;
  upload_id: any;
  athlete: Athlete;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: string;
  sport_type: string;
  start_date: string;
  start_date_local: string;
  timezone: string;
  utc_offset: number;
  achievement_count: number;
  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;
  map: Map;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  flagged: boolean;
  gear_id: string;
  from_accepted_tag: any;
  average_speed: number;
  average_heartrate: number;
  average_watts: number;
  max_speed: number;
  device_watts: boolean;
  has_heartrate: boolean;
  pr_count: number;
  total_photo_count: number;
  has_kudoed: boolean;
  workout_type: any;
  description: any;
  calories: number;
  segment_efforts: any[];
}

export interface Athlete {
  id: number;
  resource_state: number;
}

export interface Map {
  id: string;
  polyline: any;
  resource_state: number;
}

export interface IRacingRating {
  category: string;
  type: string;
  rating: number;
  ratingDisplayAs: string;
  history?: IRacingRatingHistory[];
}

export interface IRacingRatingHistory {
  date: string;
  rating: number;
  ratingDisplayAs: string;
}

export interface IRacingAccount {
  platform: string;
  id: string;
  name: string;
  ratings: IRacingRating[] | null;
}

export interface IRacingAccountsResponse {
  items: IRacingAccount[];
  total: number;
}

export interface IRacingDrivingStatistic {
  day: string;
  user: string;
  car: number;
  track: number;
  sessionType: number;
  events: number;
  timeOnTrack: number;
  lapsDriven: number;
  cleanLapsDriven: number;
}

export interface IRacingCar {
  id: number;
  name: string;
  platform: string;
  platform_id: string | null;
}

export interface IRacingTrack {
  id: number;
  name: string;
  variant: string;
  platform: string;
  platform_id: string | null;
}

export interface IRacingDrivingStatisticsResponse {
  drivingStatistics: IRacingDrivingStatistic[];
}
