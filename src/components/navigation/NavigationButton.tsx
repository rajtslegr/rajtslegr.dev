'use client';

import { MouseEventHandler } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface NavigationButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  showMobileNavigation: boolean;
}

const NavigationButton = ({
  showMobileNavigation,
  handleClick,
}: NavigationButtonProps) => (
  <button
    onClick={handleClick}
    className="flex size-8 items-center justify-center rounded-md border border-gray-200/30 bg-white text-gray-600 transition-all duration-200 hover:border-gray-200/50 hover:text-black dark:border-gray-800/30 dark:bg-card dark:text-gray-400 dark:hover:border-gray-800/50 dark:hover:text-gray-200"
  >
    <motion.div className="flex size-full items-center justify-center">
      {showMobileNavigation ? (
        <XMarkIcon className="size-4" />
      ) : (
        <Bars3Icon className="size-4" />
      )}
    </motion.div>
  </button>
);

export default NavigationButton;
