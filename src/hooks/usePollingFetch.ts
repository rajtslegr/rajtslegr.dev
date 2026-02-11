import { useCallback, useEffect, useRef, useState } from 'react';

interface UsePollingFetchOptions {
  intervalMs?: number;
}

interface UsePollingFetchResult<T> {
  data: T | undefined;
  error: Error | undefined;
  isLoading: boolean;
}

const usePollingFetch = <T>(
  url: string,
  { intervalMs = 60_000 }: UsePollingFetchOptions = {},
): UsePollingFetchResult<T> => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = (await response.json()) as T;
      setData(json);
      setError(undefined);
    } catch (thrown) {
      setError(thrown instanceof Error ? thrown : new Error('Fetch failed'));
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();

    intervalRef.current = setInterval(fetchData, intervalMs);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [fetchData, intervalMs]);

  return { data, error, isLoading };
};

export default usePollingFetch;
