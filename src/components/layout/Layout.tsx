'use client';

import { ReactNode, useState, useEffect, MouseEvent } from 'react';

import { usePathname } from 'next/navigation';

import Footer from '@/components/layout/Footer';
import DashboardNav from '@/components/navigation/DashboardNav';
import MobileNavigation from '@/components/navigation/MobileNavigation';
import NavBar from '@/components/navigation/NavBar';
import { useScrollBlock } from '@/hooks/useScrollBlock';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  const [isNavigationTransitioning, setIsNavigationTransitioning] =
    useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';

  const navButtonClickHandler = (
    _event: MouseEvent<HTMLButtonElement>,
  ): void => {
    if (showMobileNavigation) {
      setIsNavigationTransitioning(true);
      setTimeout(() => {
        setShowMobileNavigation(false);
        allowScroll();
      }, 0);
    } else {
      window.scrollTo({ top: 0 });
      setShowMobileNavigation(true);
      blockScroll();
    }
  };

  function linkClickHandler(_event: MouseEvent<HTMLButtonElement>): void {
    setIsNavigationTransitioning(true);
  }

  useEffect(() => {
    if (isNavigationTransitioning) {
      const timer = setTimeout(() => {
        setShowMobileNavigation(false);
        setIsNavigationTransitioning(false);
        allowScroll();
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }

    return () => {};
  }, [isNavigationTransitioning, allowScroll]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-700 dark:bg-black dark:text-gray-200">
      <NavBar
        showMobileNavigation={showMobileNavigation}
        handleClick={navButtonClickHandler}
      />
      {(showMobileNavigation || isNavigationTransitioning) && (
        <MobileNavigation
          handleClick={linkClickHandler}
          isTransitioning={isNavigationTransitioning}
        />
      )}
      {isDashboard && <DashboardNav />}
      <div className="background-gradient mx-auto w-full max-w-[75ch] flex-auto px-4 py-8 md:py-10">
        {children}
      </div>
      {!showMobileNavigation && <Footer />}
    </div>
  );
};

export default Layout;
