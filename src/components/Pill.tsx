interface Props {
  children: React.ReactNode;
}

const Pill: React.FC<Props> = ({ children }) => {
  return (
    <span className="px-3 py-1 bg-gray-200 rounded-full shadow dark:bg-gray-600">
      <p className="text-sm font-thin text-center">{children}</p>
    </span>
  );
};

export default Pill;
