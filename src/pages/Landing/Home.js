import { useContext } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { PortableText } from '@portabletext/react';

import { Button } from '../../components/Button';
import { SocialIcons } from '../../components/SocialIcons';
import { myPortableTextComponents } from '../../utils/constants';
import Store from '../../contexts/Store';

const Home = () => {
  const { INTRODUCTION } = useContext(Store);

  return (
    <section
      name="home"
      className="
        bg-center bg-fixed bg-cover bg-no-repeat h-full dark:min-h-[unset] flex flex-col"
    >
      <div className="section-container h-full items-start">
        <p
          className="mt-11 text-sm 
    text-[var(--color-primary)] dark:text-[var(--color-primary)] 
    font-normal uppercase my-2 leading-7"
        >
          Let's build something together
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-5xl mb-2 leading-10 dark:text-white">
          Hi, I'm Edwin Madeda
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-5xl leading-10 dark:text-white">
          {INTRODUCTION.role}
        </h2>
        <div className="py-5 max-w-[700px] md:min-h-[10vh]">
          <PortableText
            value={INTRODUCTION.briefDescription}
            components={myPortableTextComponents}
          />
        </div>

        <Button containerClass="group mt-5 mb-10" anchor="works" domLink="/">
          View Work
          <BsFillArrowRightCircleFill className="text-xl ml-4 group-hover:rotate-90 transition-all duration-500 ease-in-out" />
        </Button>
        <SocialIcons className="lg:hidden" />
      </div>
    </section>
  );
};

export default Home;
