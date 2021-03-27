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
        <img src="/hero.png" alt="Hero" className="rounded-full shadow-xl filter-grayscale"></img>
        <h1 className="hidden lg:block text-2xl">Petr Rajtslegr</h1>
      </div>
    </>
  );
};

export default IndexPage;
