import { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<'input'> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, type = 'text', ...props }, ref) => (
    <label className="w-full">
      {label && (
        <div className="mb-1 font-medium dark:text-gray-100">{label}</div>
      )}
      <input
        className="p-2 w-full text-gray-700 dark:text-gray-300 bg-white dark:bg-card rounded-md shadow sm:text-sm"
        type={type}
        ref={ref}
        {...props}
      />
    </label>
  ),
);

Input.displayName = 'Input';

export default Input;
