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
      name: string;
      date: { uts: string; '#text': string };
      album: { '#text': string };
      artist: { '#text': string };
      image: { '#text': string }[];
    }[];
  };
}

export type { IGitHubData, ILastFmData };
