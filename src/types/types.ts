export interface IGitHubData {
  node_id: string;
  full_name: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  watchers_count: number;
}

export interface ILastFmData {
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

export interface IIgData {
  data: {
    id: string;
    permalink: string;
    media_url?: string;
    thumbnail_url?: string;
    caption: string;
  }[];
}

export interface IProject {
  title: string;
  description: string;
  build: string;
  image: string;
  live?: string;
  repo?: string;
}

export interface ISortedPostData {
  date: string;
  title: string;
  id: string;
}

export interface IPostId {
  params: {
    id: string;
  };
}

export interface IPostData {
  date: string;
  title: string;
  id: string;
  contentHtml: string;
}
