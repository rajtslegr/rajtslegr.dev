import MotionSection from '../layout/MotionSection';

interface Props {
  index: number;
  data: { timeRange: string; job: string; description: string };
}

const TimelineItem: React.FC<Props> = ({
  index,
  data: { timeRange, job, description },
}) => (
  <MotionSection delay={index / 10 + 0.1} className="flex">
    <div className="relative flex-row">
      <div className="flex items-center justify-center w-3 h-full">
        <div className="w-[1px] h-full bg-black dark:bg-gray-100"></div>
      </div>
      <div className="absolute w-3 h-3 bg-gray-500 rounded-full shadow top-6 dark:bg-gray-400"></div>
    </div>
    <div className="my-4 ml-6 sm:ml-12">
      <h3 className="text-lg font-semibold dark:text-gray-100">{job}</h3>
      <h4 className="mb-2 font-semibold dark:text-gray-300">{timeRange}</h4>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  </MotionSection>
);

export default TimelineItem;
