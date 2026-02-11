import type { MouseEventHandler } from 'react';

import clsx from 'clsx';

import ProgressBar from '../post/ProgressBar';
import ThemeButton from '@/components/buttons/ThemeButton';
import NavigationButton from '@/components/navigation/NavigationButton';
import NavLink from '@/components/navigation/NavLink';
import useOnTop from '@/hooks/useOnTop';
import useTheme from '@/hooks/useTheme';

interface NavBarProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  showMobileNavigation: boolean;
  pathname: string;
}

const NavBar = ({
  showMobileNavigation,
  handleClick,
  pathname,
}: NavBarProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const onTop = useOnTop();

  const isBlogPostRoute =
    pathname?.startsWith('/blog/') && pathname !== '/blog';

  return (
    <nav
      className={clsx(
        'relative sticky top-0 z-10 h-16 border-b border-gray-200/20 bg-white/70 backdrop-blur-sm motion-safe:transition-shadow dark:border-gray-800/20 dark:bg-black/70',
        !onTop && 'shadow-xs',
      )}
    >
      <div className="mx-auto flex h-full max-w-[75ch] items-center justify-between px-4">
        <div className="sm:hidden">
          <NavigationButton
            showMobileNavigation={showMobileNavigation}
            handleClick={handleClick}
          />
        </div>
        <div className="hidden h-full sm:flex sm:items-center sm:space-x-6">
          <NavLink
            href="/"
            isHeader={true}
            className="!pl-0"
            pathname={pathname}
          >
            Home
          </NavLink>
          <NavLink href="/dashboard" isHeader={true} pathname={pathname}>
            Dashboard
          </NavLink>
          <NavLink href="/work" isHeader={true} pathname={pathname}>
            Work
          </NavLink>
          <NavLink href="/blog" isHeader={true} pathname={pathname}>
            Blog
          </NavLink>
          <NavLink
            href="https://photos.rajtslegr.dev/"
            isHeader={true}
            target="_blank"
            rel="noopener noreferrer"
            pathname={pathname}
          >
            Photos
          </NavLink>
          <NavLink href="/contact" isHeader={true} pathname={pathname}>
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
