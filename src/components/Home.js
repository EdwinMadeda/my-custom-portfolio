import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Button from './Button';
import banner3 from '../assets/images/banner-3.JPG';
import { SocialIcons } from './SocialIcons';

const Home = () => {
  return (
    <section
      name="home"
      className="pt-[var(--nav-height)]
      bg-center bg-fixed bg-cover bg-no-repeat w-full min-h-screen"
      style={{ backgroundImage: `url(${banner3})` }}
    >
      <div className="section-container h-full w-full flex flex-col justify-center items-start">
        <p className="mt-11 text-[var(--color-primary)] my-2 leading-7">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-10">
          Edwin Madeda
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-[var(--color-heading2)] leading-10">
          I'm a Frontend Developer
        </h2>
        <p className="py-5 max-w-[700px]">
          I specialize in building exceptional digital experiences. Currently,
          I’m focused on building responsive web applications.
        </p>
        <Button className="group mt-4 mb-10">
          View Work
          <BsFillArrowRightCircleFill className="text-xl ml-4 group-hover:rotate-90 transition-all duration-500 ease-in-out" />
        </Button>
        <SocialIcons className="lg:hidden" />
      </div>
    </section>
  );
};
export default Home;
