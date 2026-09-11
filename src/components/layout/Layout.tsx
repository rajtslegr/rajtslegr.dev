import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';

import Footer from '@/components/layout/Footer';
import DashboardNav from '@/components/navigation/DashboardNav';
import MobileNavigation from '@/components/navigation/MobileNavigation';
import NavBar from '@/components/navigation/NavBar';

interface LayoutProps {
  children: ReactNode;
  pathname: string;
}

const Layout = ({ children, pathname }: LayoutProps) => {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  const [isNavigationTransitioning, setIsNavigationTransitioning] =
    useState(false);
  const isDashboard = pathname === '/dashboard';

  const navButtonClickHandler = (): void => {
    if (showMobileNavigation) {
      setIsNavigationTransitioning(true);
    } else {
      window.scrollTo({ top: 0 });
      setShowMobileNavigation(true);
    }
  };

  const linkClickHandler = (): void => {
    setIsNavigationTransitioning(true);
  };

  useEffect(() => {
    if (!isNavigationTransitioning) {
      return;
    }

    const timer = setTimeout(() => {
      setShowMobileNavigation(false);
      setIsNavigationTransitioning(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [isNavigationTransitioning]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('scroll-locked', showMobileNavigation);

    return () => {
      root.classList.remove('scroll-locked');
    };
  }, [showMobileNavigation]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-700 dark:bg-black dark:text-gray-200">
      <NavBar
        showMobileNavigation={showMobileNavigation}
        handleClick={navButtonClickHandler}
        pathname={pathname}
      />
      {(showMobileNavigation || isNavigationTransitioning) && (
        <MobileNavigation
          handleClick={linkClickHandler}
          isTransitioning={isNavigationTransitioning}
          pathname={pathname}
        />
      )}
      {isDashboard && <DashboardNav />}
      <div className="background-gradient mx-auto w-full max-w-[75ch] flex-auto px-4 py-8 md:py-10">
        <main>{children}</main>
      </div>
      {!showMobileNavigation && <Footer />}
    </div>
  );
};

export default Layout;
