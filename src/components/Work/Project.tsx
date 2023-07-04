import Image, { StaticImageData } from 'next/image';

import Pill from '@/components/Work/Pill';
import WindowHeader from '@/components/Work/WindowHeader';
import { ProjectData } from '@/types/entities';

import pujdu from '../../../public/static/images/work/pujdu.jpg';
import vyber from '../../../public/static/images/work/vyber.jpg';

const IMAGES: Record<string, StaticImageData> = {
  vyber,
  pujdu,
};
interface ProjectProps {
  project: ProjectData;
}

const Project: React.FC<ProjectProps> = ({
  project: { title, description, build, image, live },
}) => (
  <div className="flex flex-col rounded-lg bg-white shadow dark:bg-card">
    <a href={live} rel="noopener noreferrer" target="_blank">
      <WindowHeader />
      <Image
        src={IMAGES[image]}
        alt={`${title} mockup`}
        placeholder="blur"
        height={393}
        width={700}
      />
      <div className="-mt-1.5 flex flex-col space-y-2 border-t border-gray-200 p-4 dark:border-gray-200/20 sm:h-64 lg:h-48">
        <h2 className="text-xl font-semibold dark:text-gray-100">{title}</h2>
        <p className="grow text-gray-700 dark:text-gray-300">{description}</p>
        <div className="flex flex-row flex-wrap gap-2">
          {build.map((tech, index) => (
            <Pill key={index}>{tech}</Pill>
          ))}
        </div>
      </div>
    </a>
  </div>
);

export default Project;
