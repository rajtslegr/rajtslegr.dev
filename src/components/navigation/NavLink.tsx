import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement } from 'react';

export interface Props extends LinkProps {
  children: string;
  isMobileNavigation?: boolean;
}

const NavLink: React.FC<Props> = ({
  children,
  isMobileNavigation,
  href,
  ...props
}) => {
  const router = useRouter();

  return (
    <Link href={href}>
      {router.pathname === href ? (
        cloneElement(
          <a
            className={clsx(
              isMobileNavigation ? 'text-2xl' : 'text-base',
              'font-medium dark:text-gray-100',
            )}
            {...props}
          >
            {children}
          </a>,
        )
      ) : (
        <a
          className={clsx(
            isMobileNavigation ? 'text-2xl' : 'text-base',
            'text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300',
          )}
          {...props}
        >
          {children}
        </a>
      )}
    </Link>
  );
};

export default NavLink;
