import Image from 'next/image';
import React from 'react';
import heroImage from '../../../public/static/images/hero.jpg';
import MotionSection from '../layout/MotionSection';

const Hero: React.FC = () => (
  <MotionSection className="flex flex-row justify-center">
    <div className="flex flex-col-reverse justify-between space-x-4 sm:flex-row sm:w-2/3">
      <div className="flex flex-col justify-center">
        <h1 className="space-y-2 text-5xl font-extrabold dark:text-gray-100">
          Petr Rajtslegr
        </h1>
        <h2 className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          Software Developer at <span className="font-semibold">Economia</span>
        </h2>
      </div>
      <div className="flex flex-col w-32 h-32 mb-12 overflow-hidden rounded-full shadow sm:mb-0 dark:grayscale">
        <Image src={heroImage} alt="Hero" placeholder="blur" priority></Image>
      </div>
    </div>
  </MotionSection>
);

export default Hero;
