import { useState } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  document.documentElement.classList[
    localStorage.theme === 'dark' || !('theme' in localStorage)
      ? 'add'
      : 'remove'
  ]('dark');

  const [theme, setTheme] = useState(localStorage.theme ?? 'light');
  const onSetTheme = () => {
    const selectTheme = theme !== 'dark' ? 'dark' : 'light';
    localStorage.theme = selectTheme;
    setTheme(selectTheme);
  };

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <div className="bg-[url(./assets/images/banner-1.JPG)] fixed h-full w-full bg-cover bg-center bg-no-repeat dark:hidden"></div>
    </>
  );
};

export default Layout;
