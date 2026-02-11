import type {
  IRacingAccountsResponse,
  IRacingCar,
  IRacingDrivingStatisticsResponse,
  IRacingTrack,
} from '@/types/entities';

const API_BASE_URL = 'https://garage61.net/api/v1';
const ENDPOINTS = {
  accounts: `${API_BASE_URL}/me/accounts`,
  statistics: `${API_BASE_URL}/me/statistics`,
  cars: `${API_BASE_URL}/cars`,
  tracks: `${API_BASE_URL}/tracks`,
};
const API_KEY = import.meta.env.GARAGE61_API_KEY;

const createAuthorizationHeader = () => ({
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
});

const handleApiResponse = async <T>(
  response: Response,
  defaultValue: T,
): Promise<T> => {
  if (!response.ok) {
    return defaultValue;
  }

  return response.json();
};

const formatDateParam = (dateString: string): string => {
  if (dateString.length === 10 && !dateString.includes('T')) {
    return dateString.includes('Z') ? dateString : `${dateString}T00:00:00Z`;
  }
  return dateString;
};

export const getLinkedAccounts = async (
  includeRatingHistory: boolean = false,
): Promise<IRacingAccountsResponse> => {
  const url = new URL(ENDPOINTS.accounts);

  if (includeRatingHistory) {
    url.searchParams.append('ratingHistory', 'true');
  }

  const response = await fetch(url.toString(), {
    headers: createAuthorizationHeader(),
  });

  return handleApiResponse(response, { items: [], total: 0 });
};

export const getDrivingStatistics = async (
  startDate?: string,
  endDate?: string,
  carIds?: number[],
  trackIds?: number[],
): Promise<IRacingDrivingStatisticsResponse> => {
  const url = new URL(ENDPOINTS.statistics);

  if (startDate) {
    url.searchParams.append('start', formatDateParam(startDate));
  }

  if (endDate) {
    if (endDate.length === 10 && endDate.indexOf('T') === -1) {
      url.searchParams.append('end', `${endDate}T23:59:59Z`);
    } else {
      url.searchParams.append('end', endDate);
    }
  }

  if (carIds?.length) {
    url.searchParams.append('cars', carIds.join(','));
  }

  if (trackIds?.length) {
    url.searchParams.append('tracks', trackIds.join(','));
  }

  const response = await fetch(url.toString(), {
    headers: createAuthorizationHeader(),
  });

  return handleApiResponse(response, { drivingStatistics: [] });
};

export const getCars = async (): Promise<IRacingCar[]> => {
  const response = await fetch(ENDPOINTS.cars, {
    headers: createAuthorizationHeader(),
  });

  const data = await handleApiResponse(response, { items: [] });
  return data.items || [];
};

export const getTracks = async (): Promise<IRacingTrack[]> => {
  const response = await fetch(ENDPOINTS.tracks, {
    headers: createAuthorizationHeader(),
  });

  const data = await handleApiResponse(response, { items: [] });
  return data.items || [];
};
