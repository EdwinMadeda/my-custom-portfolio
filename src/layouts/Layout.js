import Header from '../components/Header';

import { Outlet } from 'react-router-dom';
import { PageScrollProvider } from '../contexts/PageScrollContext';
import { StoreProvider } from '../contexts/Store';


const Layout = () => {
  return (
    <PageScrollProvider>
      <StoreProvider>
        <Header />
        <main className="pt-[var(--nav-height)] min-h-screen flex flex-col justify-start items-center">
          <Outlet />
        </main>
      </StoreProvider>
    </PageScrollProvider>
  );
};

export default Layout;
