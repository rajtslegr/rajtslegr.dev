import React from 'react';

import { NextPage } from 'next';

import ContactForm from '@/components/form/ContactForm';
import MetaData from '@/components/meta-data/MetaData';

const Contact: NextPage = () => (
  <>
    <MetaData title="Petr Rajtslegr | Contact" />
    <h1 className="mb-4 text-4xl font-extrabold dark:text-gray-100 md:mb-12">
      Contact
    </h1>
    <div className="flex flex-col">
      <ContactForm />
    </div>
  </>
);

export default Contact;
