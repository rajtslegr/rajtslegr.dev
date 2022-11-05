import { ComponentProps, forwardRef } from 'react';

import LoadingIcon from '@/components/icons/LoadingIcon';

interface ButtonProps extends ComponentProps<'button'> {
  isSubmitting?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isSubmitting, ...props }, ref) => (
    <button
      className="flex justify-center self-end p-3 mx-0 mt-3 w-24 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg shadow"
      ref={ref}
      disabled={isSubmitting}
      {...props}
    >
      {!isSubmitting ? children : <LoadingIcon />}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
