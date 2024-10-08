import NavLink from '@/components/navigation/NavLink';

import MotionSection from '../motion/MotionSection';

const MobileNavigation: React.FC = () => (
  <div className="absolute z-10 flex size-full justify-center bg-gray-50 dark:bg-dark">
    <div className="mt-24 flex flex-col space-y-4 text-center">
      <MotionSection>
        <NavLink href="/" isMobileNavigation>
          Home
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.1}>
        <NavLink href="/dashboard" isMobileNavigation>
          Dashboard
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.2}>
        <NavLink href="/work" isMobileNavigation>
          Work
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.3}>
        <NavLink href="/blog" isMobileNavigation>
          Blog
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.4}>
        <NavLink
          href="https://photos.rajtslegr.dev/"
          isHeader={true}
          target="_blank"
          rel="noopener noreferrer"
          isMobileNavigation
        >
          Photos
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.5}>
        <NavLink href="/contact" isMobileNavigation>
          Contact
        </NavLink>
      </MotionSection>
    </div>
  </div>
);

export default MobileNavigation;
