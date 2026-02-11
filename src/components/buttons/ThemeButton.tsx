import type { MouseEventHandler } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';

import useIsMounted from '@/hooks/useIsMounted';
import useTheme from '@/hooks/useTheme';

interface ThemeButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ThemeButton = ({ handleClick }: ThemeButtonProps) => {
  const isMounted = useIsMounted();
  const { resolvedTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="bg-card-light dark:bg-card flex size-8 items-center justify-center rounded-md border border-gray-200/30 text-gray-600 transition-all duration-200 hover:border-gray-200/50 hover:text-black dark:border-gray-800/30 dark:text-gray-400 dark:hover:border-gray-800/50 dark:hover:text-gray-200"
      onClick={handleClick}
    >
      <div className="flex size-full items-center justify-center">
        {isMounted &&
          (resolvedTheme === 'light' ? (
            <MoonIcon className="size-4" />
          ) : (
            <SunIcon className="size-4" />
          ))}
      </div>
    </button>
  );
};

export default ThemeButton;
