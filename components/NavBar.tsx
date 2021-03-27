import { useTheme } from 'next-themes';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ThemeButton from './ThemeButton';

interface INavLinkProps extends LinkProps {
  children: string;
}

const NavLink: React.FC<INavLinkProps> = ({ children, href, ...props }) => {
  const router = useRouter();
  return (
    <Link href={href} {...props}>
      {router.pathname === href ? (
        React.cloneElement(<a>{children}</a>)
      ) : (
        <a className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition">
          {children}
        </a>
      )}
    </Link>
  );
};

const NavBar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed w-full backdrop-blur">
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
