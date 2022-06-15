import { useEffect } from 'react';

import isbot from 'isbot';

const incrementView = async (id: string) => {
  await fetch(`/api/views/${id}`, {
    method: 'POST',
  });
};

export const useIncrementView = async (id: string) => {
  useEffect(() => {
    const isBrowser = typeof window !== undefined;
    const isBot = isbot(navigator.userAgent);

    if (isBrowser && !isBot) {
      incrementView(id);
    }
  }, [id]);
};
