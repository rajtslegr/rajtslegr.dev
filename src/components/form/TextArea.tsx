import type { ComponentProps, Ref } from 'react';

interface TextAreaProps extends ComponentProps<'textarea'> {
  label: string;
  ref?: Ref<HTMLTextAreaElement>;
}

const TextArea = ({ label, ref, ...props }: TextAreaProps) => (
  <label className="w-full">
    <div className="mb-1 font-medium dark:text-gray-100">{label}</div>
    <textarea
      className="dark:bg-card h-48 w-full rounded-md bg-white p-2 text-gray-700 shadow-sm sm:text-sm dark:text-gray-300"
      ref={ref}
      {...props}
    />
  </label>
);

export default TextArea;
