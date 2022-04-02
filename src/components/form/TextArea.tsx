import { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<'textarea'> {
  label: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, ...props }, ref) => (
    <label className="w-full">
      <div className="mb-1 font-medium dark:text-gray-100">{label}</div>
      <textarea
        className="h-48 w-full rounded-lg bg-white p-2 text-gray-700 shadow dark:bg-card dark:text-gray-300 sm:text-sm"
        ref={ref}
        {...props}
      />
    </label>
  )
);

TextArea.displayName = 'TextArea';

export default TextArea;
