import { ComponentProps, forwardRef } from 'react';

interface TextAreaProps extends ComponentProps<'textarea'> {
  label: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, ...props }, ref) => (
    <label className="w-full">
      <div className="mb-1 font-medium dark:text-gray-100">{label}</div>
      <textarea
        className="p-2 w-full h-48 text-gray-700 dark:text-gray-300 bg-white dark:bg-card rounded-lg shadow sm:text-sm"
        ref={ref}
        {...props}
      />
    </label>
  ),
);

TextArea.displayName = 'TextArea';

export default TextArea;
