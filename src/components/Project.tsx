import { NextPage } from 'next';
import Image from 'next/image';
import { IProject } from 'types/types';
import cov19cz from '../../public/static/images/projects/cov19cz.png';
import rajtslegr from '../../public/static/images/projects/rajtslegr.png';
import typewriter from '../../public/static/images/projects/typewriter.png';
import vaccbot from '../../public/static/images/projects/vaccbot.png';

const IMAGES: { [key: string]: StaticImageData } = {
  cov19cz,
  rajtslegr,
  typewriter,
  vaccbot,
};
interface Props {
  project: IProject;
}

const Project: NextPage<Props> = ({
  project: { title, description, build, image, repo },
}) => {
  const IS_DEV = process.env.NODE_ENV === 'development';

  return (
    <div className="flex flex-col overflow-hidden transition rounded shadow bg-white dark:bg-card hover:shadow-lg">
      <a href={repo} rel="noopener noreferrer" target="_blank">
        <div className="bg-gray-200 animate-pulse"></div>
        <Image
          unoptimized={IS_DEV}
          src={IMAGES[image]}
          alt={`${title} mockup`}
          placeholder="blur"
        />
        <div className="flex flex-col px-2 py-4 sm:px-4">
          <span className="mb-2 text-xl font-bold">{title}</span>
          <p className="text-base text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <p className="text-base text-gray-500 dark:text-gray-400">{build}</p>
        </div>
      </a>
    </div>
  );
};

export default Project;
