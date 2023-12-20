import { ComponentProps, forwardRef } from 'react';

interface TextAreaProps extends ComponentProps<'textarea'> {
  label: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, ...props }, ref) => (
    <label className="w-full">
      <div className="mb-1 font-medium dark:text-gray-100">{label}</div>
      <textarea
        className="h-48 w-full rounded-lg bg-white p-2 text-gray-700 shadow sm:text-sm dark:bg-card dark:text-gray-300"
        ref={ref}
        {...props}
      />
    </label>
  ),
);

TextArea.displayName = 'TextArea';

export default TextArea;
