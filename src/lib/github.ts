import { GitHubData } from '@/types/entities';
import { fetcher } from '@/utils/fetcher';

export const getRecentRepos = async (): Promise<GitHubData> =>
  fetcher<GitHubData>(
    'https://api.github.com/users/rajtslegr/repos?per_page=6&sort=pushed&direction=desc',
  );
