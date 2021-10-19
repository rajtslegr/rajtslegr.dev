import React from 'react';
import MotionSection from '../layout/MotionSection';

interface Props {
  index: number;
  data: { timeRange: string; job: string; description: string };
}

const TimelineItem: React.FC<Props> = ({
  data: { timeRange, job, description },
  index,
}) => (
  <MotionSection delay={index / 10 + 0.1} className="flex">
    <div className="relative flex-row">
      <div className="flex items-center justify-center w-4 h-full">
        <div className="w-[2px] dark:bg-gray-100 bg-black h-full"></div>
      </div>
      <div className="absolute w-4 h-4 -mt-3 bg-gray-500 rounded-full shadow dark:bg-gray-400 top-1/2"></div>
    </div>
    <div className="my-4 ml-6 text-justify sm:ml-12">
      <h3 className="text-lg font-semibold dark:text-gray-100">{job}</h3>
      <h4 className="mb-2 font-semibold dark:text-gray-300">{timeRange}</h4>
      <p className="dark:text-gray-100">{description}</p>
    </div>
  </MotionSection>
);

export default TimelineItem;
