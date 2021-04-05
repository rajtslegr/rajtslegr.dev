import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Project from '../../components/Project';
import projects from '../../data/projects';
import { IProject } from '../../types/types';

interface Props {
  projects: IProject[];
}

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Petr Rajtslegr | Projects</title>
      </Head>
      <div className="grid w-full gap-4 lg:grid-cols-2">
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
