import { useEffect, useRef } from 'react';

const ProgressBar = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrollable = scrollHeight - clientHeight;
      const progress = scrollable > 0 ? scrollTop / scrollable : 0;

      bar.style.transform = `scaleX(${progress})`;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="absolute right-0 bottom-0 left-0 h-1 origin-left bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500"
    />
  );
};

export default ProgressBar;
