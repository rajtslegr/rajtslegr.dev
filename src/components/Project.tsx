import { NextPage } from 'next';
import { IProject } from '../types/types';

interface Props {
  project: IProject;
}

const Project: NextPage<Props> = ({
  project: { title, description, build, image, repo, live },
}) => {
  return (
    <div className="overflow-hidden transition border rounded shadow hover:shadow-lg">
      <img className="w-full" src={`/static/images/projects/${image}`} alt={`${title} mockup`} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-500 dark:text-gray-400">{description}</p>
        <p className="text-base text-gray-500 dark:text-gray-400">{build}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {repo && (
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold transition bg-gray-200 rounded-full shadow bordern dark:bg-gray-600 hover:shadow-lg">
            <a href={repo} rel="noopener noreferrer" target="_blank">
              REPO
            </a>
          </span>
        )}
        {live && (
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold transition bg-gray-200 rounded-full shadow bordern dark:bg-gray-600 hover:shadow-lg">
            <a href={live} rel="noopener noreferrer" target="_blank">
              LIVE
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default Project;
