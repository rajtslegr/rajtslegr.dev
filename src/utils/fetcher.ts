export const fetcher = async <JSON>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> => {
  const response = await fetch(input, init);

  return response.json();
};
