import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { motion, TargetAndTransition, useReducedMotion } from 'framer-motion';
import { MouseEventHandler, useMemo } from 'react';

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
      className="w-12 h-12 my-3 overflow-hidden bg-gray-200 rounded-lg shadow dark:text-gray-100 dark:bg-gray-700"
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
