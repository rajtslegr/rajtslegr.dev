import { ReactElement } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

interface Props {
  children: ReactElement | ReactElement[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <NavBar>Petr Rajtslegr</NavBar>
      <main className="flex-auto w-full pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
