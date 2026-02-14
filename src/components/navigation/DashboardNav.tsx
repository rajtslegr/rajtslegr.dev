import { useEffect, useState } from 'react';

import clsx from 'clsx';

interface DashboardNavProps {
  className?: string;
}

const sections = [
  { id: 'photos', label: 'Photos' },
  { id: 'music', label: 'Music' },
  { id: 'strava', label: 'Strava' },
  { id: 'iracing', label: 'iRacing' },
  { id: 'github', label: 'GitHub' },
] as const;

const DashboardNav = ({ className }: DashboardNavProps) => {
  const [activeSection, setActiveSection] = useState('photos');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const offsetTop = element.offsetTop - 76;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });

      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={clsx(
        'sticky top-16 z-[9] mb-8 w-full border-b border-gray-200/20 bg-white/70 pb-1 backdrop-blur-sm motion-safe:transition-shadow dark:border-gray-800/20 dark:bg-black/70',
        className,
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="mx-auto flex size-full max-w-[75ch] items-center justify-between px-4 md:justify-start md:space-x-6">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={clsx(
                'relative inline-block px-1 py-1.5 text-xs whitespace-nowrap duration-200 motion-safe:transition-all md:px-3 md:text-sm',
                activeSection === id
                  ? 'font-medium text-black dark:text-white'
                  : 'font-normal text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200',
              )}
            >
              {label}
              {activeSection === id && (
                <span className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-black dark:bg-white" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
