'use client';

import { MouseEventHandler } from 'react';

import clsx from 'clsx';

import NavigationButton from '@/components/navigation/NavigationButton';
import NavLink from '@/components/navigation/NavLink';

import MotionSection from '../motion/MotionSection';

interface MobileNavigationProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  isTransitioning?: boolean;
}

const MobileNavigation = ({
  handleClick,
  isTransitioning = false,
}: MobileNavigationProps) => {
  const handleLinkClick = () => {
    if (handleClick) {
      handleClick({} as React.MouseEvent<HTMLButtonElement>);
    }
  };

  return (
    <div
      className={clsx(
        'absolute z-10 flex h-screen w-full justify-center bg-white/90 backdrop-blur-md transition-opacity duration-300 dark:bg-black/90',
        isTransitioning ? 'opacity-0' : 'opacity-100',
      )}
    >
      <div className="absolute left-4 top-4">
        <NavigationButton
          showMobileNavigation={true}
          handleClick={handleClick}
        />
      </div>
      <div className="mt-24 flex flex-col space-y-8 text-center">
        <MotionSection>
          <NavLink href="/" isMobileNavigation onClick={handleLinkClick}>
            Home
          </NavLink>
        </MotionSection>
        <MotionSection delay={0.1}>
          <NavLink
            href="/dashboard"
            isMobileNavigation
            onClick={handleLinkClick}
          >
            Dashboard
          </NavLink>
        </MotionSection>
        <MotionSection delay={0.2}>
          <NavLink href="/work" isMobileNavigation onClick={handleLinkClick}>
            Work
          </NavLink>
        </MotionSection>
        <MotionSection delay={0.3}>
          <NavLink href="/blog" isMobileNavigation onClick={handleLinkClick}>
            Blog
          </NavLink>
        </MotionSection>
        <MotionSection delay={0.4}>
          <NavLink
            href="https://photos.rajtslegr.dev/"
            target="_blank"
            rel="noopener noreferrer"
            isMobileNavigation
            onClick={handleLinkClick}
          >
            Photos
          </NavLink>
        </MotionSection>
        <MotionSection delay={0.5}>
          <NavLink href="/contact" isMobileNavigation onClick={handleLinkClick}>
            Contact
          </NavLink>
        </MotionSection>
      </div>
    </div>
  );
};

export default MobileNavigation;
