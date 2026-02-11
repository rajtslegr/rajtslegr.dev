import type { ComponentProps, Ref } from 'react';

import LoadingIcon from '@/components/icons/LoadingIcon';

interface ButtonProps extends ComponentProps<'button'> {
  isSubmitting?: boolean;
  ref?: Ref<HTMLButtonElement>;
}

const Button = ({ children, isSubmitting, ref, ...props }: ButtonProps) => (
  <button
    className="mx-0 mt-3 flex w-24 justify-center self-end rounded-md bg-gray-200 p-3 text-gray-700 shadow-sm motion-safe:transition-all motion-safe:hover:scale-105 dark:bg-gray-700 dark:text-gray-300"
    ref={ref}
    disabled={isSubmitting}
    {...props}
  >
    {!isSubmitting ? children : <LoadingIcon />}
  </button>
);

export default Button;
