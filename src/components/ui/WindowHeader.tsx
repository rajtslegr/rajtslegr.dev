const WindowHeader: React.FC = () => {
  return (
    <div className="flex items-center h-6 pl-2 space-x-1 bg-gray-200 rounded-t dark:bg-gray-700">
      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
    </div>
  );
};

export default WindowHeader;
