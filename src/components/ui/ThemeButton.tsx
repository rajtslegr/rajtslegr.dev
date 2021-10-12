import useIsMounted from '@/hooks/useIsMounted';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { motion, TargetAndTransition, useReducedMotion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { MouseEventHandler, useMemo } from 'react';

interface Props {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ThemeButton: React.FC<Props> = ({ handleClick: handleClick }) => {
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
      className="w-12 h-12 my-3 overflow-hidden bg-gray-200 rounded-lg shadow dark:text-gray-100 dark:bg-gray-700"
      onClick={handleClick}
    >
      <motion.div
        whileTap={shouldReduceMotion ? {} : tapProperties}
        className="p-3"
      >
        {isMounted && (resolvedTheme === 'light' ? <MoonIcon /> : <SunIcon />)}
      </motion.div>
    </button>
  );
};

export default ThemeButton;
