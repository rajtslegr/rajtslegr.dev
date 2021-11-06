import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

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

export interface InstagramDataEdge {
  id: string;
  permalink: string;
  media_url: string;
  thumbnail_url: string;
  caption: string;
}
export interface InstagramData {
  data: InstagramDataEdge[];
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
  mdxContent: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export interface ReadTime {
  text: string;
  time: number;
  words: number;
  minutes: number;
}
