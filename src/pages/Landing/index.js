import PageWrap from '../../components/PageWrap';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Works from './Works';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Landing = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Works />
      <Testimonials />
      <Contact />
    </>
  );
};

export default PageWrap(Landing);
