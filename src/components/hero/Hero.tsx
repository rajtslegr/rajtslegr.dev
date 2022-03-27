import Image from 'next/image';

import heroImage from '../../../public/static/images/hero.jpg';
import ExternalLink from '../navigation/ExternalLink';

const Hero: React.FC = () => (
  <div className="flex flex-row justify-center">
    <div className="flex flex-col-reverse justify-between space-x-4 sm:flex-row sm:mt-12 sm:w-2/3">
      <div className="flex flex-col justify-center">
        <h1 className="space-y-2 text-5xl font-extrabold dark:text-gray-100">
          Petr Rajtslegr
        </h1>
        <h2 className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-ukraine-yellow to-ukraine-blue">
            Software Developer
          </span>{' '}
          at{' '}
          <ExternalLink
            href="https://www.economia.cz"
            className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-ukraine-yellow to-ukraine-blue"
          >
            Economia
          </ExternalLink>
        </h2>
      </div>
      <div className="flex overflow-hidden p-1 mb-12 w-32 h-32 bg-gradient-to-br from-ukraine-yellow to-ukraine-blue rounded-full shadow sm:mb-0">
        <div className="overflow-hidden rounded-full dark:grayscale">
          <Image
            src={heroImage}
            width={120}
            height={120}
            alt="Hero"
            placeholder="blur"
            priority
          ></Image>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
