import { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<'input'> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, type = 'text', ...props }, ref) => {
    return (
      <label className="w-full">
        {label && (
          <div className="mb-1 font-medium dark:text-gray-100">{label}</div>
        )}
        <input
          className="w-full p-2 text-gray-700 bg-white rounded-md shadow sm:text-sm dark:bg-card dark:text-gray-300"
          type={type}
          ref={ref}
          {...props}
        />
      </label>
    );
  },
);

Input.displayName = 'Input';

export default Input;
