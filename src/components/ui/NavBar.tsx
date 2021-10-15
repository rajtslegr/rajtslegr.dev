import NavLink from '@/components/ui/NavLink';
import useOnTop from '@/hooks/useOnTop';
import classNames from '@/utils/classNames';
import { useTheme } from 'next-themes';
import React from 'react';
import MobileNavigation from './MobileNavigation';
import ThemeButton from './ThemeButton';

const NavBar: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const onTop = useOnTop();

  return (
    <nav
      className={classNames(
        !onTop ? 'shadow' : 'border-b border-gray-200',
        'header sticky top-0 z-10 dark:border-b dark:border-gray-200 dark:border-opacity-20 motion-safe:transition-shadow',
      )}
    >
      <div className="container flex items-center justify-between h-full max-w-4xl px-4 mx-auto">
        <div className="sm:hidden">
          <MobileNavigation />
        </div>
        <ul>
          <li className="hidden space-x-2 sm:block">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
        <ThemeButton
          handleClick={() =>
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
          }
        />
      </div>
    </nav>
  );
};

export default NavBar;
