import { IGitHubData } from 'types/types';
import fetcher from 'utils/fetcher';

export const getRecentRepos = async (): Promise<IGitHubData> => {
  return await fetcher<IGitHubData>(
    'https://api.github.com/users/rajcep/repos?per_page=6&sort=pushed&direction=desc',
  );
};
