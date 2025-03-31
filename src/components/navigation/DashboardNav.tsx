import { useEffect, useState } from 'react';

import clsx from 'clsx';

interface DashboardNavProps {
  className?: string;
}

const sections = [
  { id: 'photos', label: 'Photos' },
  { id: 'music', label: 'Music' },
  { id: 'strava', label: 'Strava' },
  { id: 'racing', label: 'iRacing' },
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

  return (
    <nav
      className={clsx(
        'header sticky top-16 z-[9] mb-8 motion-safe:transition-all',
        className,
      )}
    >
      <div className="container flex h-full max-w-[75ch] items-center">
        <div className="flex h-full items-center space-x-6">
          {sections.map(({ id, label }, index) => (
            <a
              key={id}
              href={`#${id}`}
              className={clsx(
                'relative inline-block px-3 py-1.5 text-sm duration-200 motion-safe:transition-all',
                activeSection === id
                  ? 'font-medium text-black dark:text-white'
                  : 'font-normal text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200',
                index === 0 && '!pl-0',
              )}
            >
              {label}
              {activeSection === id && (
                <span
                  className={clsx(
                    'absolute -bottom-1 h-px w-1/2 bg-black dark:bg-white',
                    index === 0
                      ? 'left-1/4 -translate-x-1/4'
                      : 'left-1/2 -translate-x-1/2',
                  )}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
