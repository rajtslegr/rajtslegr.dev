import { TimelineData } from '@/types/entities';

interface TimelineItemProps {
  data: TimelineData;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  data: { timeRange, job, description },
}) => (
  <div className="flex">
    <div className="relative flex-row">
      <div className="flex justify-center items-center mt-6 w-4 h-full">
        <div className="w-1 h-full bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 rounded shadow"></div>
      </div>
      <div className="absolute top-0 mt-5 w-4 h-4 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-full shadow">
        <div className="absolute top-0 mt-1 ml-1 w-2 h-2 bg-gray-50 dark:bg-dark rounded-full"></div>
      </div>
    </div>
    <div className="flex flex-col justify-start my-3.5 ml-6 sm:ml-12">
      <h3 className="text-lg font-semibold dark:text-gray-100">{job}</h3>
      <h4 className="mb-2 font-semibold dark:text-gray-300">{timeRange}</h4>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

export default TimelineItem;
