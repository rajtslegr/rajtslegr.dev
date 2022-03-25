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

  return (
    <Link href={href}>
      <a
        className={clsx(
          'motion-safe:transition-colors',
          router.pathname === href
            ? 'font-semibold dark:text-gray-100'
            : 'font-medium text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
          isMobileNavigation ? 'text-2xl' : 'text-base',
          !isMobileNavigation &&
            isHeader &&
            'p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md',
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
