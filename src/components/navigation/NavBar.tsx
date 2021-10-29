import NavLink from '@/components/navigation/NavLink';
import useOnTop from '@/hooks/useOnTop';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { MouseEventHandler } from 'react';
import ThemeButton from '../buttons/ThemeButton';
import NavigationButton from './NavigationButton';
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
