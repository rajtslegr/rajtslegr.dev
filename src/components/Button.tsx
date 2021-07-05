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
        className="flex justify-center w-24 p-3 mt-3 transition bg-gray-200 rounded-lg shadow mx:auto dark:bg-gray-600 hover:shadow-lg"
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
