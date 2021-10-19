import timeline from '@/data/timeline';
import TimelineItem from './TimelineItem';

const Timeline: React.FC = () => (
  <div className="flex flex-row justify-center md:w-4/5 mt-28 md:ml-20">
    <div className="flex flex-col">
      {timeline.map((item, index) => (
        <TimelineItem key={index} data={item} index={index} />
      ))}
    </div>
  </div>
);

export default Timeline;
