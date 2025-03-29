import { ReactNode, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import Footer from '@/components/layout/Footer';
import MobileNavigation from '@/components/navigation/MobileNavigation';
import NavBar from '@/components/navigation/NavBar';
import { useScrollBlock } from '@/hooks/useScrollBlock';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const router = useRouter();

  const mobileNavigationHandler = (): void => {
    if (showMobileNavigation) {
      setShowMobileNavigation(false);
      allowScroll();
    } else {
      window.scrollTo({ top: 0 });
      setShowMobileNavigation(true);
      blockScroll();
    }
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      setShowMobileNavigation(false);
      allowScroll();
    });
  }, [allowScroll, router.events]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-700 dark:bg-black dark:text-gray-200">
      <NavBar
        showMobileNavigation={showMobileNavigation}
        handleClick={mobileNavigationHandler}
      />
      {showMobileNavigation && (
        <MobileNavigation handleClick={mobileNavigationHandler} />
      )}
      <div className="background-gradient mx-auto w-full max-w-[75ch] flex-auto px-4 py-8 md:py-10">
        {children}
      </div>
      {!showMobileNavigation && <Footer />}
    </div>
  );
};

export default Layout;
