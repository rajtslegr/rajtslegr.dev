import { ComponentProps, forwardRef } from 'react';

interface InputProps extends ComponentProps<'input'> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = 'text', ...props }, ref) => (
    <label className="w-full">
      {label && (
        <div className="mb-1 font-medium dark:text-gray-100">{label}</div>
      )}
      <input
        className="dark:bg-card w-full rounded-md bg-white p-2 text-gray-700 shadow-sm sm:text-sm dark:text-gray-300"
        type={type}
        ref={ref}
        {...props}
      />
    </label>
  ),
);

Input.displayName = 'Input';

export default Input;
