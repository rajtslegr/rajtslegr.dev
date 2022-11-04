import { NextPage } from 'next';

import Hero from '@/components/hero/Hero';
import MetaData from '@/components/meta-data/MetaData';
import MotionSection from '@/components/motion/MotionSection';
import Timeline from '@/components/timeline/Timeline';

const IndexPage: NextPage = () => (
  <>
    <MetaData title="Petr Rajtslegr" />
    <MotionSection>
      <Hero />
    </MotionSection>
    <MotionSection delay={0.1}>
      <Timeline />
    </MotionSection>
  </>
);

export default IndexPage;
