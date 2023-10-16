import { MouseEventHandler, useMemo } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { motion, TargetAndTransition, useReducedMotion } from 'framer-motion';
import { useTheme } from 'next-themes';

import useIsMounted from '@/hooks/useIsMounted';

interface ThemeButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ handleClick }) => {
  const isMounted = useIsMounted();
  const { resolvedTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const tapProperties: TargetAndTransition = useMemo(() => {
    return {
      translateX: '-90px',
      rotate: -90,
    };
  }, []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="my-3 h-12 w-12 overflow-hidden rounded-lg bg-gray-200 shadow motion-safe:transition-all motion-safe:hover:scale-105 dark:bg-gray-700 dark:text-gray-100"
      onClick={handleClick}
    >
      <motion.div
        whileTap={shouldReduceMotion ? undefined : tapProperties}
        className="p-3"
      >
        {isMounted && (resolvedTheme === 'light' ? <MoonIcon /> : <SunIcon />)}
      </motion.div>
    </button>
  );
};

export default ThemeButton;
