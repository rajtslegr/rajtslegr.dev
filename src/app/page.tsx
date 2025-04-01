import Hero from '@/components/hero/Hero';
import MotionSection from '@/components/motion/MotionSection';
import Timeline from '@/components/timeline/Timeline';

export const metadata = {
  title: 'Petr Rajtslegr',
};

export default function HomePage() {
  return (
    <>
      <MotionSection>
        <Hero />
      </MotionSection>
      <MotionSection delay={0.1}>
        <Timeline />
      </MotionSection>
    </>
  );
}
