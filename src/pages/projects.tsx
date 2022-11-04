import { GetStaticProps, NextPage } from 'next';

import MetaData from '@/components/meta-data/MetaData';
import MotionSection from '@/components/motion/MotionSection';
import Project from '@/components/project/Project';
import { projectsData } from '@/data/projects';
import { ProjectData } from '@/types/entities';

interface ProjectsProps {
  projects: ProjectData[];
}

const Projects: NextPage<ProjectsProps> = ({ projects }) => (
  <>
    <MetaData title="Petr Rajtslegr | Projects" />
    <MotionSection>
      <h1 className="mb-4 text-4xl font-extrabold dark:text-gray-100 md:mb-12">
        Projects
      </h1>
    </MotionSection>
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project, index) => (
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
      projects: projectsData,
    },
  };
};

export default Projects;
