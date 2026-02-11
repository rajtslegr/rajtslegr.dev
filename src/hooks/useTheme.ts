import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [resolvedTheme, setResolvedTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme) {
      setResolvedTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setResolvedTheme('dark');
    }
  }, []);

  const setTheme = (theme: Theme) => {
    setResolvedTheme(theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return {
    resolvedTheme: mounted ? resolvedTheme : 'light',
    setTheme,
  };
}

export default useTheme;
