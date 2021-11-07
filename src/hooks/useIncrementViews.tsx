import { useEffect } from 'react';

const useIncrementView = async (id: string) => {
  useEffect(() => {
    const isHeadless = /HeadlessChrome/.test(window.navigator.userAgent);

    if (!isHeadless && typeof window !== undefined) {
      incrementView(id);
    }
  }, [id]);
};

const incrementView = async (id: string) => {
  await fetch(`/api/views/${id}`, {
    method: 'POST',
  });
};

export default useIncrementView;
