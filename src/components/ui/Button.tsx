import { ComponentProps, forwardRef } from 'react';
import LoadingIcon from './LoadingIcon';

interface Props extends ComponentProps<'button'> {
  children: React.ReactNode;
  submitting?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, submitting, ...props }, ref) => {
    return (
      <button
        className="flex self-end justify-center w-24 p-3 mt-3 text-gray-700 bg-gray-200 rounded-lg shadow mx:auto dark:bg-gray-700 dark:text-gray-300"
        ref={ref}
        disabled={submitting}
        {...props}
      >
        {!submitting ? children : LoadingIcon}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
