import { MouseEventHandler } from 'react';

import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import ThemeButton from '@/components/buttons/ThemeButton';
import ExternalLink from '@/components/navigation/ExternalLink';
import NavigationButton from '@/components/navigation/NavigationButton';
import NavLink from '@/components/navigation/NavLink';
import useOnTop from '@/hooks/useOnTop';

import ProgressBar from '../post/ProgressBar';

interface NavBarProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  showMobileNavigation: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  showMobileNavigation,
  handleClick,
}) => {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const onTop = useOnTop();

  const isBlogPostRoute = router.pathname.includes('/blog/');

  return (
    <nav
      className={clsx(
        'header sticky top-0 z-10 motion-safe:transition-shadow',
        onTop && 'shadow',
      )}
    >
      <div className="container mx-auto flex h-full max-w-4xl items-center justify-between px-4 sm:pl-2">
        <div className="sm:hidden">
          <NavigationButton
            showMobileNavigation={showMobileNavigation}
            handleClick={handleClick}
          />
        </div>
        <div className="hidden h-full sm:block">
          <NavLink href="/" isHeader={true}>
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
        <ExternalLink href="https://vshymanskyy.github.io/StandWithUkraine">
          #StandWithUkraine 🇺🇦
        </ExternalLink>
        <ThemeButton
          handleClick={() =>
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
          }
        />
      </div>
      {isBlogPostRoute && <ProgressBar />}
    </nav>
  );
};

export default NavBar;
