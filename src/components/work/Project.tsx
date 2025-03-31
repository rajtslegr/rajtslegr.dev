import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

import Pill from '@/components/work/Pill';
import WindowHeader from '@/components/work/WindowHeader';
import { ProjectData } from '@/types/entities';

import elections from '../../../public/static/images/work/elections.jpg';
import pujdu from '../../../public/static/images/work/pujdu.jpg';
import vyber from '../../../public/static/images/work/vyber.jpg';
import xquest from '../../../public/static/images/work/xquest.jpg';

const IMAGES: Record<string, StaticImageData> = {
  elections,
  pujdu,
  vyber,
  xquest,
};
interface ProjectProps {
  project: ProjectData;
}

const Project = ({
  project: { title, description, build, image, live },
}: ProjectProps) => (
  <div
    className={clsx(
      'card-hover group size-full overflow-hidden rounded-md border border-gray-200/30 bg-card-light dark:border-gray-800/30 dark:bg-card',
      live && 'transition-all duration-300',
    )}
  >
    <a
      href={live || '#'}
      rel={live ? 'noopener noreferrer' : undefined}
      target={live ? '_blank' : undefined}
      className={clsx(!live && 'cursor-default', 'block w-full')}
    >
      <div className="relative overflow-hidden">
        <WindowHeader />
        <div className="overflow-hidden">
          <Image
            src={IMAGES[image]}
            alt={`${title} mockup`}
            placeholder="blur"
            height={393}
            width={700}
            className="w-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-3 p-5">
        <h2 className="text-lg font-medium text-black dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <div className="flex flex-row flex-wrap gap-2 pt-2">
          {build.map((tech, index) => (
            <Pill key={index}>{tech}</Pill>
          ))}
        </div>
      </div>
    </a>
  </div>
);

export default Project;
