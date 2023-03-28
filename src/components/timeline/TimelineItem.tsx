import { TimelineData } from '@/types/entities';

interface TimelineItemProps {
  data: TimelineData;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  data: { timeRange, job, description },
}) => (
  <div className="flex">
    <div className="relative flex-row">
      <div className="mt-6 flex h-full w-4 items-center justify-center">
        <div className="h-full w-1 rounded bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 shadow"></div>
      </div>
      <div className="absolute top-0 mt-5 h-4 w-4 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 shadow">
        <div className="absolute top-0 ml-1 mt-1 h-2 w-2 rounded-full bg-gray-50 dark:bg-dark"></div>
      </div>
    </div>
    <div className="my-3.5 ml-6 flex flex-col justify-start sm:ml-12">
      <h3 className="text-lg font-semibold dark:text-gray-100">{job}</h3>
      <h4 className="mb-2 font-semibold dark:text-gray-300">{timeRange}</h4>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

export default TimelineItem;
