import { MouseEventHandler, useMemo } from 'react';

import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { motion, TargetAndTransition, useReducedMotion } from 'framer-motion';

interface Props {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  showMobileNavigation: boolean;
}

const NavigationButton: React.FC<Props> = ({
  showMobileNavigation,
  handleClick,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const tapProperties: TargetAndTransition = useMemo(() => {
    return {
      translateX: '90px',
      rotate: 90,
    };
  }, []);

  return (
    <button
      aria-label="Toggle Navigation"
      onClick={handleClick}
      className="overflow-hidden my-3 w-12 h-12 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 rounded-lg shadow"
    >
      <motion.div
        whileTap={shouldReduceMotion ? undefined : tapProperties}
        className="p-3"
      >
        {showMobileNavigation ? <XIcon /> : <MenuIcon />}
      </motion.div>
    </button>
  );
};

export default NavigationButton;
