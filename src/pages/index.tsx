import Hero from '@/components/Hero';
import MetaData from '@/components/MetaData';
import heroCode from '@/data/hero-code';
import { GetStaticProps, NextPage } from 'next';

interface Props {
  heroCode: string[];
}

const IndexPage: NextPage<Props> = ({ heroCode }) => {
  return (
    <>
      <MetaData title="Petr Rajtslegr" />
      <h1 className="mb-4 text-4xl font-extrabold md:mb-12 dark:text-gray-100">
        Hello, I&apos;m Petr
      </h1>
      <Hero heroCode={heroCode} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      heroCode,
    },
    revalidate: 10800,
  };
};

export default IndexPage;
