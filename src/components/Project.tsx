import { NextPage } from 'next';
import Image from 'next/image';
import { IProject } from '../types/types';

interface Props {
  project: IProject;
}

const Project: NextPage<Props> = ({ project: { title, description, build, image, repo } }) => {
  return (
    <div className="flex flex-col overflow-hidden transition border rounded shadow hover:shadow-lg">
      <a href={repo} rel="noopener noreferrer" target="_blank">
        <Image
          src={`/static/images/projects/${image}`}
          alt={`${title} mockup`}
          width={1100}
          height={600}
        />
        <div className="flex flex-col px-2 py-4 sm:px-4">
          <span className="mb-2 text-xl font-bold">{title}</span>
          <p className="text-base text-gray-500 dark:text-gray-400">{description}</p>
          <p className="text-base text-gray-500 dark:text-gray-400">{build}</p>
        </div>
      </a>
    </div>
  );
};

export default Project;
