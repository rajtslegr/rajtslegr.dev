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
    user: {
      edge_owner_to_timeline_media: {
        edges: {
          node: {
            id: string;
            thumbnail_src: string;
            edge_media_to_caption: { edges: { node: { text: string } }[] };
            edge_media_preview_like: { count: number };
            shortcode: string;
          };
        }[];
      };
    };
  };
}

export type { IGitHubData, ILastFmData, IIgData };
