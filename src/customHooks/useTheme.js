import { useState } from 'react';

const useTheme = () => {
  document.documentElement.classList[
    localStorage.theme === 'dark' || !('theme' in localStorage)
      ? 'add'
      : 'remove'
  ]('dark');

  const [theme, setTheme] = useState(localStorage.theme ?? 'light');
  const resetTheme = () => {
    const selectTheme = theme !== 'dark' ? 'dark' : 'light';
    localStorage.theme = selectTheme;
    setTheme(selectTheme);
  };

  return { theme, resetTheme };
};
export default useTheme;
