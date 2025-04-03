import TimelineItem from '@/components/timeline/TimelineItem';
import { timelineData } from '@/data/timeline';

const Timeline = () => (
  <section className="pb-0 pt-2 md:pt-4">
    <div className="flex flex-col space-y-2">
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          data={item}
          isLast={index === timelineData.length - 1}
        />
      ))}
    </div>
  </section>
);

export default Timeline;
