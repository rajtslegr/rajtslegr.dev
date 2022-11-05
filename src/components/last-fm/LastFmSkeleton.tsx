const LastFmSkeleton: React.FC = () => (
  <div className="grid gap-4 md:grid-cols-2">
    {new Array(10).fill(undefined).map((_value, index) => (
      <div
        key={index}
        className="flex flex-col p-2 h-36 bg-white dark:bg-card rounded shadow"
      >
        <div className="flex flex-row space-x-2">
          <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded shadow motion-safe:animate-pulse"></div>
          <div className="flex flex-col justify-between w-3/5">
            <div className="mb-4 w-1/3 h-6 bg-gray-200 dark:bg-gray-700 rounded-sm motion-safe:animate-pulse"></div>
            <div className="w-3/5 h-4 bg-gray-200 dark:bg-gray-700 rounded-sm motion-safe:animate-pulse"></div>
            <div className="w-3/5 h-4 bg-gray-200 dark:bg-gray-700 rounded-sm motion-safe:animate-pulse"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default LastFmSkeleton;
