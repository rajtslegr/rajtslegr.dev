import { MouseEventHandler } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

import useIsMounted from '@/hooks/useIsMounted';

interface ThemeButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ handleClick }) => {
  const isMounted = useIsMounted();
  const { resolvedTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="my-3 h-12 w-12 overflow-hidden rounded-lg bg-gray-200 p-3 shadow dark:bg-gray-700 dark:text-gray-100"
      onClick={handleClick}
    >
      {isMounted && (resolvedTheme === 'light' ? <SunIcon /> : <MoonIcon />)}
    </button>
  );
};

export default ThemeButton;
