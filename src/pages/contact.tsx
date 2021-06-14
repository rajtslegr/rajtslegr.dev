import ContactForm from 'components/ContactForm';
import { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Petr Rajtslegr | Contact</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
