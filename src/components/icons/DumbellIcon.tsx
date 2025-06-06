'use client';

import { useTheme } from 'next-themes';

import useIsMounted from '@/hooks/useIsMounted';

const DumbellIcon = () => {
  const isMounted = useIsMounted();
  const { resolvedTheme } = useTheme();

  let fill = 'currentColor';
  if (isMounted) {
    fill = resolvedTheme === 'light' ? '#000000' : '#ffffff';
  }

  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.67 7.33h-3V4.35h-4.35v6.97H8.67V4.35H4.33v3h-3v3.97H0v1.35h1.33v4.01h3v2.98h4.34v-6.99h6.65v6.99h4.35v-3.01h3v-3.98H24v-1.35h-1.33zm-18.34 8H2.67V8.7h1.66zm3-2.66v5.64H5.67V5.69h1.66zm10.99 3.98v1.66h-1.65V5.69h1.65zm3.01-3.98v2.63h-1.66V8.68h1.66z"
        fill={fill}
      />
    </svg>
  );
};

export default DumbellIcon;
