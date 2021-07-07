import { IProject } from '@/types/types';
import { NextPage } from 'next';
import Image from 'next/image';
import cov19cz from '../../public/static/images/projects/cov19cz.jpg';
import rajtslegr from '../../public/static/images/projects/rajtslegr.jpg';
import typewriter from '../../public/static/images/projects/typewriter.jpg';
import vaccbot from '../../public/static/images/projects/vaccbot.jpg';
import Pill from './Pill';
import WindowHeader from './WindowHeader';

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
    <div className="flex flex-col transition bg-white rounded-b shadow dark:bg-card hover:shadow-lg">
      <a href={repo} rel="noopener noreferrer" target="_blank">
        <WindowHeader />
        <Image
          unoptimized={IS_DEV}
          src={IMAGES[image]}
          alt={`${title} mockup`}
          placeholder="blur"
          height={393}
          width={700}
        />
        <div className="flex flex-col p-4 -mt-1.5 space-y-2 border-t border-gray-200 dark:border-opacity-20 sm:h-64 lg:h-48">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="flex-grow text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className="flex flex-row flex-wrap gap-2 pt-4">
            {build.map((tech, i) => {
              return <Pill key={i}>{tech}</Pill>;
            })}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
