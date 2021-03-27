import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import GitHub from '../components/GitGub';
import { IGitHubData } from '../types/types';

interface Props {
  gitHubData: IGitHubData[];
}

const IndexPage: NextPage<Props> = ({ gitHubData }) => {
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
        <h1 className="hidden 5xl:block text-2xl">Petr Rajtslegr</h1>
      </div>
      <GitHub data={gitHubData} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/rajcep/repos?per_page=6&sort=pushed&direction=desc',
  );
  const gitHubData = await res.json();

  return {
    props: {
      gitHubData,
    },
    revalidate: 3600,
  };
};

export default IndexPage;
