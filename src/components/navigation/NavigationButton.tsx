import { MouseEventHandler, useMemo } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { motion, TargetAndTransition, useReducedMotion } from 'framer-motion';

interface NavigationButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  showMobileNavigation: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
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
      className="my-3 h-12 w-12 overflow-hidden rounded-lg bg-gray-200 shadow dark:bg-gray-700 dark:text-gray-100"
    >
      <motion.div
        whileTap={shouldReduceMotion ? undefined : tapProperties}
        className="p-3"
      >
        {showMobileNavigation ? <XMarkIcon /> : <Bars3Icon />}
      </motion.div>
    </button>
  );
};

export default NavigationButton;
