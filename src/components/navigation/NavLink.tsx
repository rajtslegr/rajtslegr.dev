'use client';

import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps extends LinkProps {
  children: string;
  target?: string;
  rel?: string;
  isHeader?: boolean;
  isMobileNavigation?: boolean;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({
  children,
  target,
  rel,
  isMobileNavigation,
  isHeader,
  className,
  href,
  onClick,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();

  const isRouteActive =
    !target && !rel
      ? pathname?.split('/')[1] === String(href).split('/')[1]
      : false;

  const isHomeLink = href === '/' && className?.includes('!pl-0');

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      onClick={handleClick}
      className={clsx(
        'relative duration-200 motion-safe:transition-all',
        isRouteActive
          ? 'font-medium text-black dark:text-white'
          : 'font-normal text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200',
        isMobileNavigation ? 'mb-2 text-xl' : 'text-sm',
        !isMobileNavigation && isHeader && 'inline-block px-3 py-1.5',
        className,
      )}
      {...props}
    >
      {children}
      {isRouteActive && !isMobileNavigation && isHeader && (
        <span
          className={clsx(
            'absolute -bottom-1 h-px w-1/2 bg-black dark:bg-white',
            isHomeLink
              ? 'left-1/4 -translate-x-1/4'
              : 'left-1/2 -translate-x-1/2',
          )}
        />
      )}
    </Link>
  );
};

export default NavLink;
