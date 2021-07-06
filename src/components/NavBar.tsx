import NavLink from 'components/NavLink';
import useOnTop from 'hooks/useOnTop';
import { useTheme } from 'next-themes';
import ThemeButton from './ThemeButton';

const NavBar: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const onTop = useOnTop();

  return (
    <nav
      className={`header fixed z-10 w-full dark:border-b dark:border-gray-200 dark:border-opacity-20 ${
        !onTop ? 'shadow' : 'border-b border-gray-200'
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
          handleClick={() =>
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
          }
        />
      </div>
    </nav>
  );
};

export default NavBar;
