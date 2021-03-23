import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Petr Rajtslegr</title>
      </Head>
      <div className="container flex justify-center mx-auto">
        <div className="flex justify-center items-center w-full m-4 p-4">
          <h1 className="mb-4 font-semibold">Coming soon...</h1>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
