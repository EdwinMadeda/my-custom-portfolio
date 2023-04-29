import bannerLight from '../assets/images/banner-3.JPG';
import bannerDark from '../assets/images/banner-2.JPG';
import { useContext } from 'react';
import Store from '../contexts/Store';

const BannerOverlay = () => {
  const { setThemeVariant } = useContext(Store);

  return (
    <>
      <div
        className="fixed top-0 left-0 -z-20 w-full h-screen bg-center bg-fixed bg-cover bg-no-repeat full-screen"
        style={{
          backgroundImage: `url(${setThemeVariant({
            light: bannerLight,
            dark: bannerDark,
          })})`,
        }}
      ></div>
    </>
  );
};
export default BannerOverlay;
