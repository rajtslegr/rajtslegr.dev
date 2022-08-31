import Image from 'next/image';

import heroImage from '../../../public/static/images/hero.jpg';

const Hero: React.FC = () => (
  <div className="flex flex-row justify-center">
    <div className="flex flex-col-reverse justify-between space-x-4 sm:mt-12 sm:w-2/3 sm:flex-row">
      <div className="flex flex-col justify-center">
        <h1 className="space-y-2 text-5xl font-extrabold dark:text-gray-100">
          Petr Rajtslegr
        </h1>
        <h2 className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          <span className="bg-gradient-to-r from-ukraine-yellow to-ukraine-blue bg-clip-text font-semibold text-transparent">
            Software Developer
          </span>
        </h2>
      </div>
      <div className="mb-12 flex h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-ukraine-yellow to-ukraine-blue p-1 shadow sm:mb-0">
        <div className="overflow-hidden rounded-full">
          <Image src={heroImage} alt="Hero" placeholder="blur" priority></Image>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
