import { useState } from 'react';
import NavLink from './NavLink';

interface IExternalLink {
  href: string;
  children: string;
}

const ExternalLink: React.FC<IExternalLink> = ({ href, children }) => (
  <a
    className="text-gray-500 transition dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <div className="bottom-0 flex flex-row w-11/12 p-2 border-t border-gray-200 justify-evenly sm:w-3/4 sm:p-6 md:w-1/2">
      <div className="flex flex-col space-y-2">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
      <div className="flex flex-col space-y-2">
        <ExternalLink href="https://github.com/RajceP">GitHub</ExternalLink>
        <ExternalLink href="https://twitter.com/RajceP">Twitter</ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/petr-rajtšlégr-5aa84a16b">
          LinkedIn
        </ExternalLink>
      </div>
      <div className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
        Petr Rajtslegr &copy; {year}
      </div>
    </div>
  );
};

export default Footer;
