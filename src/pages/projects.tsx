import MetaData from '@/components/MetaData';
import Project from '@/components/Project';
import projects from '@/data/projects';
import { IProject } from '@/types/types';
import { GetStaticProps, NextPage } from 'next';

interface Props {
  projects: IProject[];
}

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <MetaData title="Petr Rajtslegr | Projects" />
      <h1 className="mb-4 text-4xl font-extrabold md:mb-12">Projects</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((p, i) => {
          return <Project key={i} project={p} />;
        })}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects,
    },
  };
};

export default Projects;
