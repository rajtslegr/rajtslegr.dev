interface Props {
  data: { timeRange: string; job: string; description: string };
}

const TimelineItem: React.FC<Props> = ({
  data: { timeRange, job, description },
}) => (
  <div className="flex">
    <div className="relative flex-row">
      <div className="flex justify-center items-center w-3 h-full">
        <div className="w-[1px] h-full bg-black dark:bg-gray-100"></div>
      </div>
      <div className="absolute top-6 w-3 h-3 bg-gray-500 dark:bg-gray-400 rounded-full shadow"></div>
    </div>
    <div className="my-4 ml-6 sm:ml-12">
      <h3 className="text-lg font-semibold dark:text-gray-100">{job}</h3>
      <h4 className="mb-2 font-semibold dark:text-gray-300">{timeRange}</h4>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

export default TimelineItem;
