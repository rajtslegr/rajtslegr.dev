import Footer from '@/components/ui/Footer';
import NavBar from '@/components/ui/NavBar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="flex-auto max-w-4xl min-h-screen px-4 pt-8 mx-auto mb-16 md:pt-12">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
