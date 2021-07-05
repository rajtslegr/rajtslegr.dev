import { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<'input'> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, type = 'text', ...props }, ref) => {
    return (
      <label className="w-full">
        {label && <div className="mb-1 font-medium">{label}</div>}
        <input
          className="w-full p-2 bg-white rounded-md shadow focus:shadow-lg sm:text-sm dark:bg-card"
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
