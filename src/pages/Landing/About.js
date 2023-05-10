import { useContext } from 'react';
import Store from '../../contexts/Store';
import { PortableText } from '@portabletext/react';
import { myPortableTextComponents } from '../../utils/constants';

const About = () => {
  const { ABOUT } = useContext(Store);

  const aboutSnippetComponents = {
    block: {
      normal: ({ children }) => (
        <h3 className="section-sub-title">{children}</h3>
      ),
    },
  };
  return (
    <section
      name="about"
      className="dark:bg-transparent"
      /*bg-[var(--bg-white-alt)] #002242*/
    >
      <div className="section-container">
        <div>
          <h2 className="section-title">About</h2>
        </div>

        <div className="section-content gap-4">
          <>
            <PortableText
              value={ABOUT.snippet}
              components={aboutSnippetComponents}
            />
          </>
          <PortableText
            value={ABOUT.content}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </section>
  );
};
export default About;
