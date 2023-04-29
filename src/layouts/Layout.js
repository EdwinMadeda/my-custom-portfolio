import Header from '../components/pages/Header';
import { Outlet } from 'react-router-dom';
import { PageScrollProvider } from '../contexts/PageScrollContext';
import { StoreProvider } from '../contexts/Store';
import BannerOverlay from '../components/BannerOverlay';

const Layout = () => {
  return (
    <PageScrollProvider>
      <StoreProvider>
        <Header />
        <>
          <Outlet />
          <BannerOverlay />
        </>
      </StoreProvider>
    </PageScrollProvider>
  );
};

export default Layout;
