import { useTheme } from 'next-themes';
import React from 'react';
import useOnTop from '../hooks/useOnTop';
import NavLink from './NavLink';
import ThemeButton from './ThemeButton';

const NavBar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const onTop = useOnTop();

  return (
    <nav
      className={`fixed w-full bg-white dark:bg-dark z-10 ${
        !onTop ? 'shadow' : null
      } transition-shadow`}
    >
      <div className="container flex h-full xl:w-4/6 justify-between items-center mx-auto px-4">
        <ul>
          <li className="space-x-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
        <ThemeButton handleClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      </div>
    </nav>
  );
};

export default NavBar;
