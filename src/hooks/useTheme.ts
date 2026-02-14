import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyTheme(theme: Theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function hasUserPreference(): boolean {
  return localStorage.getItem('theme') !== null;
}

export function useTheme() {
  const [resolvedTheme, setResolvedTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme') as Theme | null;
    const theme = saved ?? getSystemTheme();
    setResolvedTheme(theme);
    applyTheme(theme);
  }, []);

  // Follow system changes only when user has no explicit preference
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      if (hasUserPreference()) return;
      const theme = e.matches ? 'dark' : 'light';
      setResolvedTheme(theme);
      applyTheme(theme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted]);

  const setTheme = useCallback((theme: Theme) => {
    setResolvedTheme(theme);
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }, []);

  return {
    resolvedTheme: mounted ? resolvedTheme : 'light',
    setTheme,
  };
}

export default useTheme;
