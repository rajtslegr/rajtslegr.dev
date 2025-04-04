import MotionSection from '@/components/motion/MotionSection';
import Project from '@/components/work/Project';
import { projectData } from '@/data/work';

export const metadata = {
  title: 'Work',
};

export default function WorkPage() {
  const work = projectData;

  return (
    <>
      <MotionSection>
        <h1 className="mb-8 inline-block font-normal tracking-tight text-black md:mb-12 dark:text-white">
          <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">
            Work
          </span>
        </h1>
      </MotionSection>
      <div className="grid w-full gap-6 sm:grid-cols-2">
        {work.map((project, index) => (
          <MotionSection key={index} delay={0.1 + index / 10}>
            <Project project={project} />
          </MotionSection>
        ))}
      </div>
    </>
  );
}
