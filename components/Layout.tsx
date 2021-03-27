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
        <div className="container lg:w-4/6 mx-auto m-4 p-4">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
