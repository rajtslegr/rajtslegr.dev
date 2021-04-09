export const getRecentRepos = async (): Promise<Response | null> => {
  try {
    const res = await fetch(
      'https://api.github.com/users/rajcep/repos?per_page=6&sort=pushed&direction=desc',
    );
    return await res.json();
  } catch (e) {
    return null;
  }
};
