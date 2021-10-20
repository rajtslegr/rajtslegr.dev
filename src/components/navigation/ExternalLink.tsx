import { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

const ExternalLink: React.FC<Props> = ({ href, children, className }) => (
  <a
    className={
      className ||
      'font-medium text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
    }
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default ExternalLink;
