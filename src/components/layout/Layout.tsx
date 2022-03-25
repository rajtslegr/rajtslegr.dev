import { ReactNode, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useKonami } from 'react-konami-code';

import MobileNavigation from '../navigation/MobileNavigation';
import Footer from './Footer';
import KonamiParticles from './Particles';
import NavBar from '@/components/navigation/NavBar';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [showConfetti, setshowConfetti] = useState(false);
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);

  const router = useRouter();

  useKonami(() => setshowConfetti(true));

  useEffect(() => {
    setShowMobileNavigation(false);
  }, [router.asPath]);

  const mobileNavigationHandler = (): void => {
    setShowMobileNavigation((previoustState) => !previoustState);
  };

  return (
    <>
      <NavBar
        showMobileNavigation={showMobileNavigation}
        handleClick={mobileNavigationHandler}
      />
      {showMobileNavigation && <MobileNavigation />}
      <main className="flex-auto px-4 my-8 mx-auto max-w-4xl min-h-[calc(100vh-8rem)] md:mt-12">
        {children}
      </main>
      {!showMobileNavigation && <Footer />}
      {showConfetti && <KonamiParticles />}
    </>
  );
};

export default Layout;
