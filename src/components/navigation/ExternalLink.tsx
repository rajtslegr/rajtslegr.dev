import { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

const ExternalLink: React.FC<Props> = ({
  href,
  children,
  className,
  ariaLabel,
}) => (
  <a
    className={
      className ||
      'font-medium text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 motion-safe:transition-colors'
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
