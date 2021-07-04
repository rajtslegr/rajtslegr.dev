import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

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
    media_url: string;
    thumbnail_url: string;
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
  id: string;
  title: string;
  date: string;
  readingTime: IReadTimeResults;
}

export interface IPostId {
  params: {
    id: string;
  };
}

export interface IPostData extends ISortedPostData {
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
}

type IReadTimeResults = {
  text: string;
  time: number;
  words: number;
  minutes: number;
};
