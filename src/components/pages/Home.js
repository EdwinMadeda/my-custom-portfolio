import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Button } from '../Button';
import { SocialIcons } from '../SocialIcons';

const Home = () => {
  return (
    <section
      name="home"
      className="
      bg-center bg-fixed bg-cover bg-no-repeat full-screen"
    >
      <div className="section-container justify-evenly items-start">
        <p className="mt-11 text-sm text-[var(--color-primary)] font-normal uppercase my-2 leading-7">
          Let's build something together
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-5xl mb-2 leading-10">
          Hi, I'm Edwin Madeda
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-5xl leading-10">
          A Frontend Developer
        </h2>
        <p className="py-5 max-w-[700px]">
          I specialize in building exceptional digital experiences. Currently,
          I’m focused on building responsive web applications.
        </p>
        <Button containerClass="group mt-5 mb-10" to="work">
          View Work
          <BsFillArrowRightCircleFill className="text-xl ml-4 group-hover:rotate-90 transition-all duration-500 ease-in-out" />
        </Button>
        <SocialIcons className="lg:hidden" />
      </div>
    </section>
  );
};
export default Home;
