import { HeartIcon } from '@heroicons/react/solid';
import NavLink from 'components/NavLink';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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

const NextJsLogo = (theme: string): JSX.Element => (
  <svg width="65" height="30" viewBox="0 0 148 90" version="1.1">
    <path
      d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
      fill={theme === 'light' ? '#6b7280' : '#9ca3af'}
      fillRule="nonzero"
    ></path>
  </svg>
);

const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex flex-col items-center w-full p-4 space-y-12 lg:pb-12">
      <div className="flex flex-col w-11/12 border-t border-gray-200 sm:w-3/4 sm:p-6 md:w-1/2">
        <div className="flex flex-row justify-between md:justify-evenly">
          <div className="flex flex-col space-y-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="flex flex-col space-y-2">
            <ExternalLink href="https://github.com/RajceP">GitHub</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/petr-rajtšlégr-5aa84a16b">
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://www.facebook.com/petr.rajtslegr">
              Facebook
            </ExternalLink>
            <ExternalLink href="https://twitter.com/RajceP">
              Twitter
            </ExternalLink>
          </div>
          <div className="flex flex-col space-y-2">
            <ExternalLink href="https://www.instagram.com/rajce">
              Instagram
            </ExternalLink>
            <ExternalLink href="https://t.me/rajcep">Telegram</ExternalLink>
            <ExternalLink href="https://www.last.fm/user/RajceP">
              Last.fm
            </ExternalLink>
            <ExternalLink href="https://soundcloud.com/rajcep">
              SoundCloud
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row items-center text-gray-500 dark:text-gray-400">
          Made by Petr Rajtslegr with&nbsp;
          <HeartIcon className="w-5 h-5" />
          &nbsp;and{theme && mounted && NextJsLogo(theme)}&nbsp;&copy;&nbsp;
          {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
