import { useEffect } from 'react';

import isbot from 'isbot';

const incrementView = async (id: string) => {
  await fetch(`/api/views/${id}`, {
    method: 'POST',
  });
};

export const useIncrementView = (id: string) => {
  useEffect(() => {
    const isBot = isbot(navigator.userAgent);

    if (!isBot) {
      incrementView(id);
    }
  }, [id]);
};
