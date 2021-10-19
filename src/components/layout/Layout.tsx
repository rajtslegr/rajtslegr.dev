import NavBar from '@/components/navigation/NavBar';
import React, { ReactNode, useState } from 'react';
import { useKonami } from 'react-konami-code';
import Footer from './Footer';
import KonamiParticles from './Particles';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [showConfetti, setshowConfetti] = useState(false);

  useKonami(() => setshowConfetti(true));

  return (
    <>
      <NavBar />
      <main className="flex-auto max-w-4xl min-h-[calc(100vh-8rem)] px-4 mx-auto my-8 md:mt-12">
        {children}
      </main>
      <Footer />
      {showConfetti && <KonamiParticles />}
    </>
  );
};

export default Layout;
