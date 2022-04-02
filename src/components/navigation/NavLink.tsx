import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

export interface Props extends LinkProps {
  children: string;
  isHeader?: boolean;
  isMobileNavigation?: boolean;
}

const NavLink: React.FC<Props> = ({
  children,
  isMobileNavigation,
  isHeader,
  href,
  ...props
}) => {
  const router = useRouter();

  const isRouteActive =
    router.pathname.split('/')[1] === String(href).split('/')[1];

  return (
    <Link href={href}>
      <a
        className={clsx(
          'motion-safe:transition-colors',
          isRouteActive
            ? 'font-semibold dark:text-gray-100'
            : 'font-medium text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
          isMobileNavigation ? 'text-2xl' : 'text-base',
          !isMobileNavigation &&
            isHeader &&
            'rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-gray-700'
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
