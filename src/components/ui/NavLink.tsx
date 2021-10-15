import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement } from 'react';

export interface Props extends LinkProps {
  children: string;
}

const NavLink: React.FC<Props> = ({ children, href, ...props }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      {router.pathname === href ? (
        cloneElement(
          <a className="font-medium dark:text-gray-100" {...props}>
            {children}
          </a>,
        )
      ) : (
        <a
          className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          {...props}
        >
          {children}
        </a>
      )}
    </Link>
  );
};

export default NavLink;
