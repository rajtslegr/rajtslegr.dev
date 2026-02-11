import type { ComponentProps, Ref } from 'react';

interface InputProps extends ComponentProps<'input'> {
  label?: string;
  ref?: Ref<HTMLInputElement>;
}

const Input = ({ label, type = 'text', ref, ...props }: InputProps) => (
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
);

export default Input;
