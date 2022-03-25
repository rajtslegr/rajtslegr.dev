interface Props {
  children: React.ReactNode;
}

const Pill: React.FC<Props> = ({ children }) => (
  <span className="py-1 px-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow">
    <p className="text-sm font-thin text-center text-gray-700 dark:text-gray-300">
      {children}
    </p>
  </span>
);

export default Pill;
