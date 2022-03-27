import TimelineItem from './TimelineItem';
import timelineData from '@/data/timeline';

const Timeline: React.FC = () => (
  <div className="flex flex-row justify-center mt-28 md:ml-20 md:w-4/5">
    <div className="flex flex-col">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} data={item} />
      ))}
    </div>
  </div>
);

export default Timeline;
