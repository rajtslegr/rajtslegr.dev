import React from 'react';

interface IExternalLink {
  href: string;
  children: string;
}

const ExternalLink = ({ href, children }: IExternalLink) => (
  <a
    className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400  transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <div className="bottom-0 w-11/12 flex flex-row justify-start sm:w-1/2 p-2 sm:p-6 border-t border-gray-500">
      <div className="flex flex-col space-y-2">
        <ExternalLink href="https://github.com/RajceP">GitHub</ExternalLink>
        <ExternalLink href="https://twitter.com/RajceP">Twitter</ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/petr-rajtšlégr-5aa84a16b">
          LinkedIn
        </ExternalLink>
      </div>
    </div>
  );
};

export default Footer;
