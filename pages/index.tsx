import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Petr Rajtslegr | Full-stack Dev</title>
      </Head>
      <div className="flex flex-col lg:flex-row lg:justify-around items-center">
        <img
          srcSet="/hero-1.jpg 164w, /hero-2.jpg 328w, /hero-3.jpg 658w"
          sizes="(max-width: 328px) 95vw, 328px"
          alt="Hero"
          className="rounded-full shadow-xl"
        ></img>
        <h1 className="hidden lg:block text-2xl">Petr Rajtslegr</h1>
      </div>
    </>
  );
};

export default IndexPage;
