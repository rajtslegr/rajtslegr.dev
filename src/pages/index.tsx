import Hero from 'components/Hero';
import heroCode from 'data/hero-code';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

interface Props {
  heroCode: string[];
}

const IndexPage: NextPage<Props> = ({ heroCode }) => {
  return (
    <>
      <Head>
        <title>Petr Rajtslegr | Full Stack Dev</title>
      </Head>
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
