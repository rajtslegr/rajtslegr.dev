'use client';

import { useTheme } from 'next-themes';

import useIsMounted from '@/hooks/useIsMounted';

const ShoeIcon = () => {
  const isMounted = useIsMounted();
  const { resolvedTheme } = useTheme();

  let fill = 'currentColor';
  if (isMounted) {
    fill = resolvedTheme === 'light' ? '#000000' : '#ffffff';
  }

  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.3 18.12L14.98 6.28a2.6 2.6 0 0 0-4.63.07l-.46.93a.585.585 0 0 1-.21-.45V3.17A2.452 2.452 0 0 0 7.24.72a2.172 2.172 0 0 0-2.01 1.4L2.91 6.84 1.39 7.96a2.768 2.768 0 0 0-1.06 2.06 2.96 2.96 0 0 0 .9 2.32l7.76 7.9a11.62 11.62 0 0 0 8.22 3.43h3.65a2.757 2.757 0 0 0 2.41-1.4l.05-.09a2.7 2.7 0 0 0-.01-2.73 2.665 2.665 0 0 0-2.01-1.33zm.85 3.39l-.05.09a1.425 1.425 0 0 1-1.24.73h-3.65a10.257 10.257 0 0 1-7.26-3.04l-7.78-7.92a1.566 1.566 0 0 1-.49-1.27 1.426 1.426 0 0 1 .5-1.05l.71-.53 8.6 8.48h1.64v-.28L3.98 7.7l2.48-5.02a.848.848 0 0 1 .78-.61 1.1 1.1 0 0 1 1.09 1.1v3.66a1.92 1.92 0 0 0 1.92 1.92h.43l.88-1.8a1.24 1.24 0 0 1 1.12-.7 1.257 1.257 0 0 1 1.11.67l1.04 1.94L12.69 10v1.52l2.77-1.47.77 1.42v.01l-2.63 1.39v1.53l3.26-1.73.74 1.37-3.02 1.6v1.53l3.65-1.94 2.06 3.85.25.36h.4a1.376 1.376 0 0 1 1.2.69 1.34 1.34 0 0 1 .01 1.38z"
        fill={fill}
      />
    </svg>
  );
};

export default ShoeIcon;
