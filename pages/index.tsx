import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Petr Rajtslegr | Full-stack Dev</title>
      </Head>
      <div className="container flex flex-col items-center mx-auto m-4 p-4">
        <h1 className="mb-4 font-semibold">Coming soon...</h1>
      </div>
    </>
  );
};

export default IndexPage;
