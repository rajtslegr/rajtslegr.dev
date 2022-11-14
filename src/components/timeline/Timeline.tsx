import TimelineItem from '@/components/timeline/TimelineItem';
import { timelineData } from '@/data/timeline';

const Timeline: React.FC = () => (
  <div className="mt-14 flex flex-row justify-center md:mt-28 md:ml-20 md:w-4/5">
    <div className="flex flex-col">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} data={item} />
      ))}
    </div>
  </div>
);

export default Timeline;
