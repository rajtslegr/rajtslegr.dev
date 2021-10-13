import Hero from '@/components/Hero';
import MetaData from '@/components/MetaData';
import MotionSection from '@/components/MotionSection';
import heroCode from '@/data/hero-code';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';

interface Props {
  heroCode: string[];
}

const IndexPage: NextPage<Props> = ({ heroCode }) => (
  <>
    <MetaData title="Petr Rajtslegr" />
    <MotionSection>
      <h1 className="mb-4 text-4xl font-extrabold md:mb-12 dark:text-gray-100">
        Hello, I&apos;m Petr
      </h1>
    </MotionSection>
    <MotionSection delay={0.1}>
      <Hero heroCode={heroCode} />
    </MotionSection>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      heroCode,
    },
    revalidate: 10800,
  };
};

export default IndexPage;
