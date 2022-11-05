import Image from 'next/image';

import heroImage from '../../../public/static/images/hero.jpg';

const Hero: React.FC = () => (
  <div className="flex flex-row justify-center">
    <div className="flex flex-col-reverse justify-between space-x-4 sm:flex-row sm:mt-12 sm:w-2/3">
      <div className="flex flex-col justify-center">
        <h1 className="space-y-2 text-5xl font-extrabold dark:text-gray-100">
          Petr Rajtslegr
        </h1>
        <h2 className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Software Developer
          </span>
        </h2>
      </div>
      <div className="flex overflow-hidden p-1 mb-12 w-32 h-32 bg-gradient-to-br from-indigo-500 via-blue-300 to-purple-700 rounded-full shadow sm:mb-0">
        <Image
          className="overflow-hidden rounded-full"
          src={heroImage}
          alt="Hero"
          placeholder="blur"
          priority
        ></Image>
      </div>
    </div>
  </div>
);

export default Hero;
