import ContactForm from 'components/ContactForm';
import { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Petr Rajtslegr | Contact</title>
      </Head>
      <h1 className="mb-4 text-4xl font-bold md:mb-12">Contact</h1>
      <div className="flex flex-col items-center justify-center">
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
