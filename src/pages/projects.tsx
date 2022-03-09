import { GetStaticProps, NextPage } from 'next';

import MotionSection from '@/components/layout/MotionSection';
import MetaData from '@/components/meta-data/MetaData';
import Project from '@/components/project/Project';
import projectsData from '@/data/projects';
import { ProjectData } from '@/types/entities';

interface Props {
  projects: ProjectData[];
}

const Projects: NextPage<Props> = ({ projects }) => (
  <>
    <MetaData title="Petr Rajtslegr | Projects" />
    <MotionSection>
      <h1 className="mb-4 text-4xl font-extrabold md:mb-12 dark:text-gray-100">
        Projects
      </h1>
    </MotionSection>
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))}
    </div>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: projectsData,
    },
  };
};

export default Projects;
