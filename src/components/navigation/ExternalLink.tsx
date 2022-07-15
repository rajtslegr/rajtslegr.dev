import { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className,
  ariaLabel,
}) => (
  <a
    className={
      className ||
      'font-medium text-gray-500 hover:text-gray-600 motion-safe:transition-colors dark:text-gray-400 dark:hover:text-gray-300'
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
