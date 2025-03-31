import { GetStaticProps, NextPage } from 'next';

import MetaData from '@/components/meta-data/MetaData';
import MotionSection from '@/components/motion/MotionSection';
import Project from '@/components/work/Project';
import { projectData } from '@/data/work';
import { ProjectData } from '@/types/entities';

interface WorkProps {
  work: ProjectData[];
}

const Work: NextPage<WorkProps> = ({ work }) => (
  <>
    <MetaData title="Petr Rajtslegr | Work" />
    <MotionSection>
      <h1 className="mb-8 inline-block font-normal tracking-tight text-black dark:text-white md:mb-12">
        <span className="text-sm font-medium uppercase tracking-widest text-gray-500">
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      work: projectData,
    },
  };
};

export default Work;
