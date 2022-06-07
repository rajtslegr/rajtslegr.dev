import { ComponentProps, forwardRef } from 'react';

import LoadingIcon from '@/components/icons/LoadingIcon';

interface ButtonProps extends ComponentProps<'button'> {
  submitting?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, submitting, ...props }, ref) => (
    <button
      className="mx-0 mt-3 flex w-24 justify-center self-end rounded-lg bg-gray-200 p-3 text-gray-700 shadow dark:bg-gray-700 dark:text-gray-300"
      ref={ref}
      disabled={submitting}
      {...props}
    >
      {!submitting ? children : <LoadingIcon />}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
