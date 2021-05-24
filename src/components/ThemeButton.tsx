import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { MouseEventHandler, useEffect, useState } from 'react';

interface Props {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ThemeButton: React.FC<Props> = ({ handleClick: handleClick }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-12 h-12 p-3 my-3 transition bg-gray-200 rounded-lg shadow dark:bg-gray-600 hover:shadow-lg"
      onClick={handleClick}
    >
      {mounted && (theme === 'light' ? <MoonIcon /> : <SunIcon />)}
    </button>
  );
};

export default ThemeButton;
