import { TimelineData } from '@/types/entities';

interface TimelineItemProps {
  data: TimelineData;
  isLast?: boolean;
}

const TimelineItem = ({
  data: { timeRange, job, description },
  isLast = false,
}: TimelineItemProps) => (
  <div className="relative flex rounded-lg p-4">
    <div className="relative mr-4 shrink-0 pt-1">
      <div className="flex h-full w-0.5 bg-gray-200 dark:bg-gray-800">
        {!isLast && <div className="size-full" />}
      </div>
      <div className="absolute top-1 left-1/2 size-4 -translate-x-1/2 rounded-full bg-gray-200 ring-4 ring-white transition-colors duration-200 dark:bg-gray-700 dark:ring-black" />
    </div>
    <div className="flex flex-col">
      <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-medium text-gray-900 dark:text-white">{job}</h3>
        <span className="mt-1 text-sm text-gray-500 sm:mt-0">{timeRange}</span>
      </div>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  </div>
);

export default TimelineItem;
