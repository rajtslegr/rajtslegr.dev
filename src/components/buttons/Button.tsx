import { ComponentProps, forwardRef } from 'react';

import LoadingIcon from '../icons/LoadingIcon';

interface Props extends ComponentProps<'button'> {
  children: React.ReactNode;
  submitting?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, submitting, ...props }, ref) => (
    <button
      className="flex justify-center self-end p-3 mt-3 w-24 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg shadow mx:auto"
      ref={ref}
      disabled={submitting}
      {...props}
    >
      {!submitting ? children : LoadingIcon}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
