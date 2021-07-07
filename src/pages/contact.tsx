import ContactForm from '@/components/ContactForm';
import MetaData from '@/components/MetaData';
import { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <>
      <MetaData title="Petr Rajtslegr | Contact" />
      <h1 className="mb-4 text-4xl font-extrabold md:mb-12">Contact</h1>
      <div className="flex flex-col">
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
