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
    <div className="flex flex-col transition bg-white rounded shadow dark:bg-card hover:shadow-lg">
      <a href={repo} rel="noopener noreferrer" target="_blank">
        <div className="bg-gray-200 animate-pulse dark:bg-gray-600"></div>
        <Image
          unoptimized={IS_DEV}
          src={IMAGES[image]}
          alt={`${title} mockup`}
          placeholder="blur"
        />
        <div className="flex flex-col px-4 py-2 space-y-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
          <p className="text-gray-500 dark:text-gray-400">{build}</p>
        </div>
      </a>
    </div>
  );
};

export default Project;
