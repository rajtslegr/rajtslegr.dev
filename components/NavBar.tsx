import { useTheme } from 'next-themes';
import React from 'react';
import ThemeButton from './ThemeButton';

interface Props {
  children: string;
}

const NavBar: React.FC<Props> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed w-full">
      <div className="container flex h-full justify-between items-center mx-1 sm:mx-auto px-4">
        {children}
        <ThemeButton handleClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      </div>
    </nav>
  );
};

export default NavBar;
