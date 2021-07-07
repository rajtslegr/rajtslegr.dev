import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { ReactElement } from 'react';

interface Props {
  children: ReactElement | ReactElement[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="flex-auto max-w-4xl px-4 pt-8 mx-auto mb-16 md:pt-12">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
