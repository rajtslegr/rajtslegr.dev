import { MouseEventHandler } from 'react';

import NavigationButton from '@/components/navigation/NavigationButton';
import NavLink from '@/components/navigation/NavLink';

import MotionSection from '../motion/MotionSection';

interface MobileNavigationProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const MobileNavigation = ({ handleClick }: MobileNavigationProps) => (
  <div className="absolute z-10 flex h-screen w-full justify-center bg-white/90 backdrop-blur-md dark:bg-black/90">
    <div className="absolute left-4 top-4">
      <NavigationButton showMobileNavigation={true} handleClick={handleClick} />
    </div>
    <div className="mt-24 flex flex-col space-y-8 text-center">
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
