import MetaData from '@/components/MetaData';
import Project from '@/components/Project';
import projects from '@/data/projects';
import { ProjectData } from '@/types/entities';
import { GetStaticProps, NextPage } from 'next';

interface Props {
  projects: ProjectData[];
}

const Projects: NextPage<Props> = ({ projects }) => (
  <>
    <MetaData title="Petr Rajtslegr | Projects" />
    <h1 className="mb-4 text-4xl font-extrabold md:mb-12 dark:text-gray-100">
      Projects
    </h1>
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((p, i) => (
        <Project key={i} project={p} />
      ))}
    </div>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects,
    },
  };
};

export default Projects;
