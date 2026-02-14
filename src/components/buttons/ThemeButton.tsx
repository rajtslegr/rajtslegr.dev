import type { MouseEventHandler } from 'react';

import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/20/solid';

import useIsMounted from '@/hooks/useIsMounted';
import useTheme from '@/hooks/useTheme';

interface ThemeButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ThemeButton = ({ handleClick }: ThemeButtonProps) => {
  const isMounted = useIsMounted();
  const { themePreference } = useTheme();

  const getIcon = () => {
    if (themePreference === 'light') return <SunIcon className="size-4" />;
    if (themePreference === 'dark') return <MoonIcon className="size-4" />;
    return <ComputerDesktopIcon className="size-4" />;
  };

  const getAriaLabel = () => {
    if (themePreference === 'light') return 'Switch to dark mode';
    if (themePreference === 'dark') return 'Switch to system theme';
    return 'Switch to light mode';
  };

  return (
    <button
      aria-label={getAriaLabel()}
      type="button"
      className="bg-card-light dark:bg-card flex size-8 items-center justify-center rounded-md border border-gray-200/30 text-gray-600 transition-all duration-200 hover:border-gray-200/50 hover:text-black dark:border-gray-800/30 dark:text-gray-400 dark:hover:border-gray-800/50 dark:hover:text-gray-200"
      onClick={handleClick}
    >
      <div className="flex size-full items-center justify-center">
        {isMounted && getIcon()}
      </div>
    </button>
  );
};

export default ThemeButton;
