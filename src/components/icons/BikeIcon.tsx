'use client';

import { useTheme } from 'next-themes';

import useIsMounted from '@/hooks/useIsMounted';

const BikeIcon = () => {
  const isMounted = useIsMounted();
  const { resolvedTheme } = useTheme();

  let fill = 'currentColor';
  if (isMounted) {
    fill = resolvedTheme === 'light' ? '#000000' : '#ffffff';
  }

  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 19.675a5.166 5.166 0 0 0 5.105-4.485h1.105l3.28-6.52.76 1.46a5.044 5.044 0 1 0 1.22-.57l-2.03-3.89H17a.333.333 0 0 1 .33.33v.57h1.34V6A1.674 1.674 0 0 0 17 4.32h-4.29l1.57 3.01H8.542L7.66 5.67h1.45l-.72-1.35H4.17l.72 1.35h1.241l1.26 2.37v.01l-.76 1.41a5.2 5.2 0 0 0-1.13-.135 5.175 5.175 0 1 0 0 10.35zm12.79-4.695h1.52l-2.2-4.2c.291-.073.59-.11.89-.11a3.83 3.83 0 1 1-3.83 3.83 3.877 3.877 0 0 1 1.7-3.19l1.92 3.67zm-4.82-6.31l-2.046 4.082-2.17-4.082h4.216zm-5.32.8l2.323 4.371H5.8l2.35-4.37zM5.5 10.675c.151.005.302.019.451.041l-1.58 2.944.79 1.53h4.1a3.822 3.822 0 1 1-3.76-4.515z"
        fill={fill}
      />
    </svg>
  );
};

export default BikeIcon;
