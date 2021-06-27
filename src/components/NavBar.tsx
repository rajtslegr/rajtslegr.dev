import NavLink from 'components/NavLink';
import useOnTop from 'hooks/useOnTop';
import { useTheme } from 'next-themes';
import React from 'react';
import ThemeButton from './ThemeButton';

const NavBar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const onTop = useOnTop();

  return (
    <nav
      className={`header fixed z-10 w-full bg-white bg-opacity-50 dark:bg-dark dark:bg-opacity-50 backdrop-blur ${
        !onTop ? 'shadow' : null
      } transition-shadow`}
    >
      <div className="container flex items-center justify-between h-full px-4 mx-auto xl:w-5/6 2xl:w-2/3">
        <ul>
          <li className="space-x-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
        <ThemeButton
          handleClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
    </nav>
  );
};

export default NavBar;
