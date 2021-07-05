import { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<'textarea'> {
  label: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, ...props }, ref) => {
    return (
      <label className="w-full">
        <div className="mb-1 font-medium">{label}</div>
        <textarea
          className="w-full h-48 p-2 bg-white rounded-md shadow focus:shadow-lg sm:text-sm dark:bg-card"
          ref={ref}
          {...props}
        />
      </label>
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
