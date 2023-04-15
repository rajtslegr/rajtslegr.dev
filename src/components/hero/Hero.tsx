import { useState } from 'react';

import Image from 'next/image';
import ConfettiExplosion from 'react-confetti-explosion';

import heroImage from '../../../public/static/images/hero.jpg';

const Hero: React.FC = () => {
  const [isExploding, setIsExploding] = useState(false);

  return (
    <>
      <div className="flex h-0 items-center justify-center">
        {isExploding && (
          <ConfettiExplosion
            zIndex={-1}
            colors={['#ec4899', '#c084fc', '#ef4444']}
            particleCount={300}
            particleSize={6}
            force={0.4}
          />
        )}
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col-reverse justify-between space-x-4 sm:mt-12 sm:w-2/3 sm:flex-row">
          <div className="flex flex-col justify-center">
            <h1 className="space-y-2 text-5xl font-extrabold dark:text-gray-100">
              Petr Rajtslegr
            </h1>
            <h2 className="mt-2 text-lg text-gray-700 dark:text-gray-300">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text font-semibold text-transparent">
                Software Developer
              </span>
            </h2>
          </div>
          <div className="z-0 mb-12 flex h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 via-blue-300 to-purple-700 p-1 shadow sm:mb-0">
            <Image
              onClick={() => setIsExploding(true)}
              className="overflow-hidden rounded-full"
              src={heroImage}
              alt="Hero"
              placeholder="blur"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
