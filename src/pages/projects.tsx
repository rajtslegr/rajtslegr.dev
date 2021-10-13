import MetaData from '@/components/MetaData';
import MotionSection from '@/components/MotionSection';
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
    <MotionSection>
      <h1 className="mb-4 text-4xl font-extrabold md:mb-12 dark:text-gray-100">
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
      projects,
    },
  };
};

export default Projects;
