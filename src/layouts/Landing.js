import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Skills from '../components/pages/Skills';
import Work from '../components/pages/Works';
import Contact from '../components/pages/Contact';
import Testimonials from '../components/pages/Testimonials';

const Landing = () => {
  return (
    <main className="pt-[var(--nav-height)] pb-7">
      <Home />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Contact />
    </main>
  );
};
export default Landing;
