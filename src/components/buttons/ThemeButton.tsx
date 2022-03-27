import { MouseEventHandler } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

import useIsMounted from '@/hooks/useIsMounted';

interface Props {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ThemeButton: React.FC<Props> = ({ handleClick }) => {
  const isMounted = useIsMounted();
  const { resolvedTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="overflow-hidden p-3 my-3 w-12 h-12 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 rounded-lg shadow"
      onClick={handleClick}
    >
      {isMounted && (resolvedTheme === 'light' ? <SunIcon /> : <MoonIcon />)}
    </button>
  );
};

export default ThemeButton;
