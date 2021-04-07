import { NextPage } from 'next';
import Head from 'next/head';
import ContactForm from '../components/ContactFrom';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Petr Rajtslegr | About</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <ContactForm />
      </div>
    </>
  );
};

export default About;
