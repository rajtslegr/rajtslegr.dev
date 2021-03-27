import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Props extends LinkProps {
  children: string;
}

const NavLink: React.FC<Props> = ({ children, href, ...props }) => {
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

export default NavLink;
