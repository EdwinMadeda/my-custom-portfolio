import banner3 from '../assets/images/banner-3.JPG';

const BannerOverlay3 = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 -z-20 w-full h-screen bg-center bg-fixed bg-cover bg-no-repeat full-screen"
        style={{ backgroundImage: `url(${banner3})` }}
      ></div>
    </>
  );
};
export default BannerOverlay3;
