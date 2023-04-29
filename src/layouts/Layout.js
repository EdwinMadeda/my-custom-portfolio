import { useState } from 'react';
import Header from '../components/pages/Header';
import { Outlet } from 'react-router-dom';
import { createContext } from 'react';
import { PageScrollProvider } from '../contexts/PageScrollContext';
import { StoreProvider } from '../contexts/Store';
import BannerOverlay3 from '../components/BannerOverlay3';

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
    <PageScrollProvider>
      <StoreProvider>
        <Header />
        <>
          <Outlet />
          <BannerOverlay3 />
        </>
      </StoreProvider>
    </PageScrollProvider>
  );
};

export default Layout;
