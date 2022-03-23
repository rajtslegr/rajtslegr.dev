import { MouseEventHandler } from 'react';

import clsx from 'clsx';
import { useTheme } from 'next-themes';

import ThemeButton from '../buttons/ThemeButton';
import ExternalLink from './ExternalLink';
import NavigationButton from './NavigationButton';
import NavLink from '@/components/navigation/NavLink';
import useOnTop from '@/hooks/useOnTop';

interface Props {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  showMobileNavigation: boolean;
}

const NavBar: React.FC<Props> = ({ showMobileNavigation, handleClick }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const onTop = useOnTop();

  return (
    <nav
      className={clsx(
        !onTop ? 'shadow' : 'border-b border-gray-200',
        'header sticky top-0 z-10 dark:border-b dark:border-gray-200 dark:border-opacity-20 motion-safe:transition-shadow',
      )}
    >
      <div className="container flex items-center justify-between h-full max-w-4xl px-4 mx-auto">
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
          <NavLink href="/projects" isHeader={true}>
            Projects
          </NavLink>
          <NavLink href="/blog" isHeader={true}>
            Blog
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
    </nav>
  );
};

export default NavBar;
