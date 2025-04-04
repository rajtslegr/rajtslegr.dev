import ContactForm from '@/components/form/ContactForm';
import MotionSection from '@/components/motion/MotionSection';

export const metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <>
      <MotionSection>
        <h1 className="mb-8 inline-block font-normal tracking-tight text-black md:mb-12 dark:text-white">
          <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">
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
}
