'use client';

import { MouseEventHandler } from 'react';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import ThemeButton from '@/components/buttons/ThemeButton';
import NavigationButton from '@/components/navigation/NavigationButton';
import NavLink from '@/components/navigation/NavLink';
import useOnTop from '@/hooks/useOnTop';

import ProgressBar from '../post/ProgressBar';

interface NavBarProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  showMobileNavigation: boolean;
}

const NavBar = ({ showMobileNavigation, handleClick }: NavBarProps) => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const onTop = useOnTop();

  const isBlogPostRoute =
    pathname?.startsWith('/blog/') && pathname !== '/blog';

  return (
    <nav
      className={clsx(
        'sticky top-0 z-10 h-16 border-b border-gray-200/20 bg-white/70 backdrop-blur motion-safe:transition-shadow dark:border-gray-800/20 dark:bg-black/70',
        !onTop && 'shadow-sm',
      )}
    >
      <div className="container mx-auto flex h-full max-w-[75ch] items-center justify-between px-4">
        <div className="sm:hidden">
          <NavigationButton
            showMobileNavigation={showMobileNavigation}
            handleClick={handleClick}
          />
        </div>
        <div className="hidden h-full sm:flex sm:items-center sm:space-x-6">
          <NavLink href="/" isHeader={true} className="!pl-0">
            Home
          </NavLink>
          <NavLink href="/dashboard" isHeader={true}>
            Dashboard
          </NavLink>
          <NavLink href="/work" isHeader={true}>
            Work
          </NavLink>
          <NavLink href="/blog" isHeader={true}>
            Blog
          </NavLink>
          <NavLink
            href="https://photos.rajtslegr.dev/"
            isHeader={true}
            target="_blank"
            rel="noopener noreferrer"
          >
            Photos
          </NavLink>
          <NavLink href="/contact" isHeader={true}>
            Contact
          </NavLink>
        </div>
        <div className="flex items-center">
          <ThemeButton
            handleClick={() =>
              setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
            }
          />
        </div>
      </div>
      {isBlogPostRoute && <ProgressBar />}
    </nav>
  );
};

export default NavBar;
