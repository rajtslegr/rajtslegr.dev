import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import { IProject } from '../types/types';

interface Props {
  project: IProject;
}

const Project: NextPage<Props> = ({ project: { title, description, build, image, repo } }) => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (ref?.current?.complete) setLoaded(true);
  }, []);

  return (
    <div className="flex flex-col overflow-hidden transition border rounded shadow hover:shadow-lg">
      <a href={repo} rel="noopener noreferrer" target="_blank">
        <div className={`${!loaded ? 'bg-gray-300 animate-pulse' : null}`}>
          <img
            ref={ref}
            className={`w-full border-b  ${loaded ? 'opacity-100' : 'opacity-0'}`}
            src={`/static/images/projects/${image}`}
            alt={`${title} mockup`}
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="flex flex-col px-2 py-4 sm:px-4">
          <div className="mb-2 text-xl font-bold">{title}</div>
          <p className="text-base text-gray-500 dark:text-gray-400">{description}</p>
          <p className="text-base text-gray-500 dark:text-gray-400">{build}</p>
        </div>
      </a>
    </div>
  );
};

export default Project;
