interface PillProps {
  children: React.ReactNode;
}

const Pill: React.FC<PillProps> = ({ children }) => (
  <span className="rounded-full bg-gray-200 py-1 px-3 shadow dark:bg-gray-700">
    <p className="text-center text-sm font-thin text-gray-700 dark:text-gray-300">
      {children}
    </p>
  </span>
);

export default Pill;
