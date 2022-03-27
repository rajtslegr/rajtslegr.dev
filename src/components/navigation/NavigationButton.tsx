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
    className="overflow-hidden p-3 my-3 w-12 h-12 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 rounded-lg shadow"
  >
    {showMobileNavigation ? <XIcon /> : <MenuIcon />}
  </button>
);

export default NavigationButton;
