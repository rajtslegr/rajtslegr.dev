interface Props {
  children: React.ReactNode;
}

const Pill: React.FC<Props> = ({ children }) => {
  return (
    <span className="px-3 py-1 font-thin text-center bg-gray-200 rounded-full shadow dark:bg-gray-600">
      {children}
    </span>
  );
};

export default Pill;
