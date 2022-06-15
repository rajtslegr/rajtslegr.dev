import { GetStaticProps, NextPage } from 'next';

import MetaData from '@/components/meta-data/MetaData';
import Project from '@/components/project/Project';
import { projectsData } from '@/data/projects';
import { ProjectData } from '@/types/entities';

interface ProjectsProps {
  projects: ProjectData[];
}

const Projects: NextPage<ProjectsProps> = ({ projects }) => (
  <>
    <MetaData title="Petr Rajtslegr | Projects" />
    <h1 className="mb-4 text-4xl font-extrabold dark:text-gray-100 md:mb-12">
      Projects
    </h1>
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
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
