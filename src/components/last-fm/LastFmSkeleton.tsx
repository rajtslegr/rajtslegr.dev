const LastFmSkeleton: React.FC = () => (
  <div className="grid gap-4 md:grid-cols-2">
    {new Array(6).fill(undefined).map((_value, index) => (
      <div
        key={index}
        className="flex h-36 flex-col rounded bg-white p-2 shadow dark:bg-card"
      >
        <div className="flex flex-row space-x-2">
          <div className="size-32 rounded bg-gray-200 shadow motion-safe:animate-pulse dark:bg-gray-700"></div>
          <div className="flex w-3/5 flex-col justify-between">
            <div className="mb-4 h-6 w-1/3 rounded-sm bg-gray-200 motion-safe:animate-pulse dark:bg-gray-700"></div>
            <div className="h-4 w-3/5 rounded-sm bg-gray-200 motion-safe:animate-pulse dark:bg-gray-700"></div>
            <div className="h-4 w-3/5 rounded-sm bg-gray-200 motion-safe:animate-pulse dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default LastFmSkeleton;
