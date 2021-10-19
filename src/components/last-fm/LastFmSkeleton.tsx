import MotionSection from '../layout/MotionSection';

const LastFmSkeleton: React.FC = () => (
  <div className="grid gap-4 md:grid-cols-2">
    {new Array(10).fill(undefined).map((_value, index) => (
      <MotionSection
        delay={index / 10 + 0.2}
        key={index}
        className="flex flex-col p-2 bg-white rounded shadow h-36 dark:bg-card"
      >
        <div className="flex flex-row space-x-2">
          <div className="w-32 h-32 bg-gray-200 rounded shadow dark:bg-gray-700 motion-safe:animate-pulse"></div>
          <div className="flex flex-col justify-between w-3/5">
            <div className="w-1/3 h-6 mb-4 bg-gray-200 rounded-sm dark:bg-gray-700 motion-safe:animate-pulse"></div>
            <div className="w-3/5 h-4 bg-gray-200 rounded-sm dark:bg-gray-700 motion-safe:animate-pulse"></div>
            <div className="w-3/5 h-4 bg-gray-200 rounded-sm dark:bg-gray-700 motion-safe:animate-pulse"></div>
          </div>
        </div>
      </MotionSection>
    ))}
  </div>
);

export default LastFmSkeleton;
