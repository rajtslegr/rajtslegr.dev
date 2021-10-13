import Footer from '@/components/ui/Footer';
import NavBar from '@/components/ui/NavBar';
import React, { ReactNode, useState } from 'react';
import { useKonami } from 'react-konami-code';
import KonamiParticles from '../Particles';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [showConfetti, setshowConfetti] = useState(false);

  useKonami(() => setshowConfetti(true));

  return (
    <>
      <NavBar />
      <main className="flex-auto max-w-4xl min-h-screen px-4 pt-8 mx-auto mb-16 md:pt-12">
        {children}
      </main>
      <Footer />
      {showConfetti && <KonamiParticles />}
    </>
  );
};

export default Layout;
