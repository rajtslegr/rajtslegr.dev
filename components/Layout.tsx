import { ReactElement } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

interface Props {
  children: ReactElement | ReactElement[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <NavBar />
      <main className="flex-auto w-full pt-16">
        <div className="container px-4 py-6 mx-auto my-4 md:py-12 xl:w-4/6">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
