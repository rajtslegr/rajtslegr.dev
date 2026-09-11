export interface Photo {
  id: string;
  title: string;
  url: string;
  src: {
    medium: {
      url: string;
    };
  };
}

export interface PhotosData {
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
  url: string;
  name: string;
  date: { uts: string };
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
  name: string;
  distance: number;
  moving_time: number;
  total_elevation_gain: number;
  type: string;
  average_speed: number;
  average_heartrate: number;
  private: boolean;
}

export interface IRacingRating {
  category: string;
  type: string;
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
