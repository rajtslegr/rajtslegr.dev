import { HeartIcon } from '@heroicons/react/20/solid';
import { useTheme } from 'next-themes';

import NextJsIcon from '@/components/icons/NextJsIcon';
import ExternalLink from '@/components/navigation/ExternalLink';
import NavLink from '@/components/navigation/NavLink';
import useIsMounted from '@/hooks/useIsMounted';

const Footer: React.FC = () => {
  const isMounted = useIsMounted();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center space-y-4 p-4 sm:space-y-8 lg:pb-12">
      <div className="flex w-full max-w-4xl flex-col border-t border-gray-200 p-4 dark:border-gray-200/20 sm:p-6">
        <div className="flex flex-row justify-around sm:justify-evenly">
          <div className="flex flex-col space-y-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="flex flex-col space-y-2">
            <ExternalLink href="https://github.com/rajtslegr">
              GitHub
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/petr-rajtšlégr-5aa84a16b">
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://twitter.com/RajceP">
              Twitter
            </ExternalLink>
            <ExternalLink href="https://www.instagram.com/rajce">
              Instagram
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center text-gray-500 dark:text-gray-400 sm:flex-row">
        <p className="flex flex-row items-center">Made by Petr Rajtslegr</p>
        <p className="flex flex-row items-center">
          &nbsp;with&nbsp;
          <HeartIcon className="h-5 w-5" />
          &nbsp;and
          {theme && isMounted && (
            <ExternalLink href="https://nextjs.org" ariaLabel="Next.js">
              <NextJsIcon theme={theme} />
            </ExternalLink>
          )}
          &nbsp;&copy;&nbsp;
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
