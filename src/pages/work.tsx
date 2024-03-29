import { GetStaticProps, NextPage } from 'next';

import MetaData from '@/components/meta-data/MetaData';
import MotionSection from '@/components/motion/MotionSection';
import Project from '@/components/Work/Project';
import { projectData } from '@/data/work';
import { ProjectData } from '@/types/entities';

interface WorkProps {
  work: ProjectData[];
}

const Work: NextPage<WorkProps> = ({ work }) => (
  <>
    <MetaData title="Petr Rajtslegr | Work" />
    <MotionSection>
      <h1 className="mb-4 text-4xl font-extrabold dark:text-gray-100 md:mb-12">
        Work
      </h1>
    </MotionSection>
    <div className="grid gap-4 sm:grid-cols-2">
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
