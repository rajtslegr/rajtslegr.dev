interface PillProps {
  children: React.ReactNode;
}

const Pill = ({ children }: PillProps) => (
  <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
    {children}
  </span>
);

export default Pill;
