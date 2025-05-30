'use client';

import Image from 'next/image';

import heroImage from '../../../public/static/images/hero.jpg';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-8 md:py-12">
      <div className="flex flex-col items-center text-center">
        <div className="group relative mb-6 overflow-hidden rounded-full transition-all duration-300 hover:shadow-md md:mb-8">
          <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-white opacity-0 transition-opacity dark:from-gray-800 dark:to-black"></div>
          <div className="overflow-hidden rounded-full border border-gray-200/40 p-1 dark:border-gray-800/40">
            <div className="size-32 overflow-hidden rounded-full md:size-40">
              <Image
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={heroImage}
                alt="Petr Rajtslegr"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex max-w-2xl flex-col space-y-3">
          <h1 className="font-normal tracking-tight text-black sm:text-2xl dark:text-white">
            Petr Rajtslegr
          </h1>
          <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
            Software Developer
          </p>
          <p className="mx-auto max-w-lg text-sm text-gray-600 dark:text-gray-400">
            I build modern web applications and experiences with a focus on
            performance, accessibility, and user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
