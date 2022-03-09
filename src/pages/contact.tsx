import React from 'react';

import { NextPage } from 'next';

import ContactForm from '@/components/form/ContactForm';
import MotionSection from '@/components/layout/MotionSection';
import MetaData from '@/components/meta-data/MetaData';

const Contact: NextPage = () => (
  <>
    <MetaData title="Petr Rajtslegr | Contact" />
    <MotionSection>
      <h1 className="mb-4 text-4xl font-extrabold md:mb-12 dark:text-gray-100">
        Contact
      </h1>
    </MotionSection>
    <MotionSection delay={0.1} className="flex flex-col">
      <ContactForm />
    </MotionSection>
  </>
);

export default Contact;
