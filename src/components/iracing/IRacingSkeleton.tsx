const IRacingSkeleton = () => (
  <div className="grid gap-4 md:grid-cols-2">
    {[...Array(2)].map((_, i) => (
      <div
        key={i}
        className="rounded-md border border-gray-200/30 bg-card-light p-4 dark:border-gray-800/30 dark:bg-card"
      >
        <div className="flex animate-pulse flex-col gap-4">
          <div className="h-5 w-32 rounded-md bg-gray-100 dark:bg-gray-800" />
          <div className="h-4 w-24 rounded-md bg-gray-100 dark:bg-gray-800" />
          <div className="flex flex-wrap gap-2">
            <div className="h-6 w-20 rounded-md bg-gray-100 dark:bg-gray-800" />
            <div className="h-6 w-20 rounded-md bg-gray-100 dark:bg-gray-800" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default IRacingSkeleton;
