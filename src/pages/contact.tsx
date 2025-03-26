import React from 'react';

import { NextPage } from 'next';

import ContactForm from '@/components/form/ContactForm';
import MetaData from '@/components/meta-data/MetaData';
import MotionSection from '@/components/motion/MotionSection';

const Contact: NextPage = () => (
  <>
    <MetaData title="Petr Rajtslegr | Contact" />
    <MotionSection>
      <h1 className="mb-8 inline-block font-normal tracking-tight text-black dark:text-white md:mb-12">
        <span className="text-sm font-medium uppercase tracking-widest text-gray-500">
          Contact
        </span>
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
