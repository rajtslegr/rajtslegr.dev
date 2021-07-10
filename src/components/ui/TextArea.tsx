import { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<'textarea'> {
  label: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, ...props }, ref) => {
    return (
      <label className="w-full">
        <div className="mb-1 font-medium dark:text-gray-100">{label}</div>
        <textarea
          className="w-full h-48 p-2 text-gray-700 bg-white rounded-md shadow sm:text-sm dark:bg-card dark:text-gray-300"
          ref={ref}
          {...props}
        />
      </label>
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
