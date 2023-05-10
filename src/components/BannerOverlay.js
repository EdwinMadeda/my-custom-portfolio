import { useContext } from 'react';
import Store from '../contexts/Store';
import { images } from '../utils/constants';

const BannerOverlay = () => {
  const { setThemeVariant } = useContext(Store);

  return (
    <>
      <div
        className="fixed top-0 left-0 -z-20 w-full h-screen bg-center bg-fixed bg-cover bg-no-repeat full-screen"
        style={{
          backgroundImage: `url(${setThemeVariant({
            light: images.bannerLight,
            dark: images.bannerDark,
          })})`,
        }}
      ></div>
    </>
  );
};
export default BannerOverlay;
