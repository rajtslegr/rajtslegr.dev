import { MouseEventHandler } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { motion, TargetAndTransition, useReducedMotion } from 'framer-motion';
import { useTheme } from 'next-themes';

import useIsMounted from '@/hooks/useIsMounted';

interface ThemeButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ThemeButton = ({ handleClick }: ThemeButtonProps) => {
  const isMounted = useIsMounted();
  const { resolvedTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const tapProperties: TargetAndTransition = {
    scale: 0.9,
    backgroundColor: 'rgba(100, 100, 120, 0.1)',
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex size-8 items-center justify-center rounded-md border border-gray-200/30 bg-card-light text-gray-600 transition-all duration-200 hover:border-gray-200/50 hover:text-black dark:border-gray-800/30 dark:bg-card dark:text-gray-400 dark:hover:border-gray-800/50 dark:hover:text-gray-200"
      onClick={handleClick}
    >
      <motion.div
        whileTap={shouldReduceMotion ? undefined : tapProperties}
        className="flex size-full items-center justify-center"
      >
        {isMounted &&
          (resolvedTheme === 'light' ? (
            <MoonIcon className="size-4" />
          ) : (
            <SunIcon className="size-4" />
          ))}
      </motion.div>
    </button>
  );
};

export default ThemeButton;
