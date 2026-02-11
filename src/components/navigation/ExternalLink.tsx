import type { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

const ExternalLink = ({
  href,
  children,
  className,
  ariaLabel,
}: ExternalLinkProps) => (
  <a
    className={
      className ||
      'font-normal text-gray-600 duration-200 hover:text-black motion-safe:transition-all dark:text-gray-400 dark:hover:text-gray-200'
    }
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    href={href}
  >
    {children}
  </a>
);

export default ExternalLink;
