export const getRecentSongs = (): Promise<Response> => {
  return fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rajcep&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10`,
  );
};
