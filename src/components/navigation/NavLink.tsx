import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps extends LinkProps {
  children: string;
  target?: string;
  rel?: string;
  isHeader?: boolean;
  isMobileNavigation?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  target,
  rel,
  isMobileNavigation,
  isHeader,
  href,
  ...props
}) => {
  const router = useRouter();

  const isRouteActive =
    !target && !rel
      ? router.pathname.split('/')[1] === String(href).split('/')[1]
      : false;

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={clsx(
        'motion-safe:transition-colors',
        isRouteActive
          ? 'font-semibold dark:text-gray-100'
          : 'font-medium text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
        isMobileNavigation ? 'text-2xl' : 'text-base',
        !isMobileNavigation &&
          isHeader &&
          'rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-gray-700',
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
