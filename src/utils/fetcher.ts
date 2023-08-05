export const fetcher = async <JSON>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> => {
  const response = await fetch(input, init);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
