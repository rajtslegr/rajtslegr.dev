const LastFmSkeleton = () => (
  <div className="grid gap-4 md:grid-cols-2">
    {new Array(6).fill(undefined).map((_value, index) => (
      <div
        key={index}
        className="card-hover rounded-md border border-gray-200/30 bg-white p-4 dark:border-gray-800/30 dark:bg-card"
      >
        <div className="flex space-x-3">
          <div className="size-16 shrink-0 rounded-md bg-gray-100 motion-safe:animate-pulse dark:bg-gray-800 sm:size-20"></div>
          <div className="flex flex-1 flex-col">
            <div className="rounded-xs mb-3 h-5 w-3/5 bg-gray-100 motion-safe:animate-pulse dark:bg-gray-800"></div>
            <div className="rounded-xs mb-2 h-4 w-2/5 bg-gray-100 motion-safe:animate-pulse dark:bg-gray-800"></div>
            <div className="rounded-xs h-4 w-2/5 bg-gray-100 motion-safe:animate-pulse dark:bg-gray-800"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default LastFmSkeleton;
