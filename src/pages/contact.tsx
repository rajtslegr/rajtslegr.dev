import ContactForm from '@/components/ContactForm';
import MetaData from '@/components/MetaData';
import MotionSection from '@/components/MotionSection';
import { NextPage } from 'next';
import React from 'react';

const Contact: NextPage = () => (
  <>
    <MetaData title="Petr Rajtslegr | Contact" />
    <MotionSection>
      <h1 className="mb-4 text-4xl font-extrabold md:mb-12 dark:text-gray-100">
        Contact
      </h1>
    </MotionSection>
    <MotionSection delay={0.1}>
      <div className="flex flex-col">
        <ContactForm />
      </div>
    </MotionSection>
  </>
);

export default Contact;
