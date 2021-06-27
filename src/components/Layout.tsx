import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { ReactElement } from 'react';

interface Props {
  children: ReactElement | ReactElement[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <NavBar />
      <div className="flex-auto w-full">
        <main className="container px-4 py-6 mx-auto my-4 md:py-12 xl:w-5/6 2xl:w-2/3">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
