import { ReactElement } from 'react';
import NavBar from './NavBar';

interface Props {
  children: ReactElement | ReactElement[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar>Petr Rajtslegr</NavBar>
      <main className="pt-16">{children}</main>
    </>
  );
};

export default Layout;
