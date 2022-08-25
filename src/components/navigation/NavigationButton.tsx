import { MouseEventHandler } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

interface NavigationButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  showMobileNavigation: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  showMobileNavigation,
  handleClick,
}) => (
  <button
    aria-label="Toggle Navigation"
    onClick={handleClick}
    className="my-3 h-12 w-12 overflow-hidden rounded-lg bg-gray-200 p-3 shadow dark:bg-gray-700 dark:text-gray-100"
  >
    {showMobileNavigation ? <XMarkIcon /> : <Bars3Icon />}
  </button>
);

export default NavigationButton;
