interface IGitHubData {
  node_id: string;
  full_name: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  watchers_count: number;
}

interface ILastFmData {
  recenttracks: {
    track: {
      '@attr'?: { nowplaying: boolean };
      name: string;
      date: { uts: string; '#text': string };
      album: { '#text': string };
      artist: { '#text': string };
      image: { '#text': string }[];
    }[];
  };
}

interface IIgData {
  data: {
    id: string;
    permalink: string;
    media_url: string;
    thumbnail_url: string;
    caption: string;
  }[];
}

export type { IGitHubData, ILastFmData, IIgData };
