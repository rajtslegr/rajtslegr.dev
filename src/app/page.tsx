import Hero from '@/components/hero/Hero';
import MotionSection from '@/components/motion/MotionSection';
import Timeline from '@/components/timeline/Timeline';

export const metadata = {
  title: 'Petr Rajtslegr',
};

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-144px)]">
      <MotionSection>
        <Hero />
      </MotionSection>
      <MotionSection delay={0.1}>
        <Timeline />
      </MotionSection>
    </div>
  );
}
