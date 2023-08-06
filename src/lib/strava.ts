import { Activity } from '@/types/entities';
import { fetcher } from '@/utils/fetcher';

const clientId = process.env.STRAVA_CLIENT_ID;
const clientSecret = process.env.STRAVA_CLIENT_SECRET;
const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

const TOKEN_ENDPOINT = 'https://www.strava.com/oauth/token';
const ATHLETES_ENDPOINT = `https://www.strava.com/api/v3/athlete`;

const getAccessToken = async () => {
  const body = JSON.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body,
  });

  return response.json();
};

export const getActivities = async () => {
  const { access_token: accessToken } = await getAccessToken();
  const data: Activity[] = await fetcher(
    `${ATHLETES_ENDPOINT}/activities?access_token=${accessToken}`,
  );

  const publicActivities = data
    .filter(
      (activity: Activity) =>
        activity.private === false && ['Run', 'Ride'].includes(activity.type),
    )
    .slice(0, 6);

  return publicActivities;
};
