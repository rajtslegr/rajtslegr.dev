import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type ThemePreference = 'light' | 'dark' | 'system';

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

export function useTheme() {
  const [resolvedTheme, setResolvedTheme] = useState<Theme>('light');
  const [themePreference, setThemePreference] =
    useState<ThemePreference>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedPreference =
      (localStorage.getItem('theme-preference') as ThemePreference) || 'system';
    setThemePreference(savedPreference);

    const currentTheme =
      savedPreference === 'system' ? getSystemTheme() : savedPreference;
    setResolvedTheme(currentTheme);
    applyTheme(currentTheme);
  }, []);

  useEffect(() => {
    if (!mounted || themePreference !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setResolvedTheme(newTheme);
      applyTheme(newTheme);
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [mounted, themePreference]);

  const setTheme = (preference: ThemePreference) => {
    setThemePreference(preference);
    localStorage.setItem('theme-preference', preference);

    const newTheme = preference === 'system' ? getSystemTheme() : preference;
    setResolvedTheme(newTheme);
    applyTheme(newTheme);
  };

  return {
    resolvedTheme: mounted ? resolvedTheme : 'light',
    themePreference: mounted ? themePreference : 'system',
    setTheme,
  };
}

export default useTheme;
