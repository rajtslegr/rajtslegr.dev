import Image from 'next/image';
import React from 'react';
import heroImage from '../../../public/static/images/hero.jpg';
import MotionSection from '../layout/MotionSection';
import ExternalLink from '../navigation/ExternalLink';

const Hero: React.FC = () => (
  <MotionSection className="flex flex-row justify-center">
    <div className="flex flex-col-reverse justify-between space-x-4 sm:flex-row sm:w-2/3 sm:mt-12">
      <div className="flex flex-col justify-center">
        <h1 className="space-y-2 text-5xl font-extrabold dark:text-gray-100">
          Petr Rajtslegr
        </h1>
        <h2 className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Software Developer
          </span>{' '}
          at{' '}
          <ExternalLink
            href="https://www.economia.cz"
            className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          >
            Economia
          </ExternalLink>
        </h2>
      </div>
      <div className="flex w-32 h-32 p-1 mb-12 overflow-hidden rounded-full shadow sm:mb-0 bg-gradient-to-br from-indigo-500 via-blue-300 to-purple-700">
        <div className="overflow-hidden rounded-full dark:grayscale">
          <Image src={heroImage} alt="Hero" placeholder="blur" priority></Image>
        </div>
      </div>
    </div>
  </MotionSection>
);

export default Hero;
