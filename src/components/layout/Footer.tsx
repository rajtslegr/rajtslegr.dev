import { HeartIcon } from '@heroicons/react/20/solid';
import { useTheme } from 'next-themes';

import NextJsIcon from '@/components/icons/NextJsIcon';
import ExternalLink from '@/components/navigation/ExternalLink';
import NavLink from '@/components/navigation/NavLink';
import useIsMounted from '@/hooks/useIsMounted';

const Footer = () => {
  const isMounted = useIsMounted();
  const { theme } = useTheme();

  return (
    <footer className="mx-auto w-full max-w-3xl border-t border-gray-200/30 px-6 py-12 text-sm dark:border-gray-800/30">
      <div className="flex flex-col items-center">
        <div className="grid w-full grid-cols-3 gap-x-8 gap-y-6">
          <div className="flex flex-col items-center space-y-3">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/work">Work</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <ExternalLink
              href="https://github.com/rajtslegr"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200"
            >
              GitHub
            </ExternalLink>
            <ExternalLink
              href="https://www.linkedin.com/in/petr-rajtšlégr-5aa84a16b"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200"
            >
              LinkedIn
            </ExternalLink>
            <ExternalLink
              href="https://bsky.app/profile/rajce.bsky.social"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200"
            >
              Bluesky
            </ExternalLink>
            <ExternalLink
              href="https://mastodon.social/@rajce"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200"
            >
              Mastodon
            </ExternalLink>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <ExternalLink
              href="https://www.instagram.com/rajce"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200"
            >
              Instagram
            </ExternalLink>
            <ExternalLink
              href="https://www.threads.net/@rajce"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200"
            >
              Threads
            </ExternalLink>
            <ExternalLink
              href="https://www.vero.co/rajce"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200"
            >
              Vero
            </ExternalLink>
            <ExternalLink
              href="https://www.strava.cgstom/athletes/120067793"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200"
            >
              Strava
            </ExternalLink>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center space-y-2 text-xs text-gray-500 sm:flex-row sm:space-y-0 sm:space-x-2">
          <span>© {new Date().getFullYear()} Petr Rajtslegr</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center">
            Made with <HeartIcon className="mx-1 size-3" /> and
            {theme && isMounted && (
              <ExternalLink
                href="https://nextjs.org"
                ariaLabel="Next.js"
                className="ml-1"
              >
                <NextJsIcon theme={theme} />
              </ExternalLink>
            )}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
