import { useTheme } from 'next-themes';
import NavLink from './NavLink';
import ThemeButton from './ThemeButton';

const NavBar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed w-full shadow bg-white dark:bg-dark">
      <div className="container flex h-full lg:w-4/6 justify-between items-center mx-1 sm:mx-auto px-4">
        <ul>
          <li className="space-x-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/about">About</NavLink>
          </li>
        </ul>
        <ThemeButton handleClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      </div>
    </nav>
  );
};

export default NavBar;
