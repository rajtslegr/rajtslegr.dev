import { MouseEventHandler } from 'react';

import { MenuIcon, XIcon } from '@heroicons/react/solid';

interface Props {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  showMobileNavigation: boolean;
}

const NavigationButton: React.FC<Props> = ({
  showMobileNavigation,
  handleClick,
}) => (
  <button
    aria-label="Toggle Navigation"
    onClick={handleClick}
    className="my-3 h-12 w-12 overflow-hidden rounded-lg bg-gray-200 p-3 shadow dark:bg-gray-700 dark:text-gray-100"
  >
    {showMobileNavigation ? <XIcon /> : <MenuIcon />}
  </button>
);

export default NavigationButton;
