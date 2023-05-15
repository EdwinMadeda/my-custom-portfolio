import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { images, myPortableTextComponents } from '../../utils/constants';
import { Button } from '../../components/Button';
import BannerOverlay from '../../components/BannerOverlay';

import Store from '../../contexts/Store';
import PageScroll from '../../contexts/PageScrollContext';

import PageWrap from '../../components/PageWrap';
import BackBtn from '../../components/BackBtn';

const SingleWork = () => {
  const { slug } = useParams();
  const { navigateAndScroll } = useContext(PageScroll);
  const { WORKS, setThemeVariant } = useContext(Store);

  const selectWork = WORKS?.find((item) => item.slug === slug);
  const { title, backgroundPhoto, techStack, description } = selectWork ?? {};

  return (
    <>
      {selectWork && (
        <>
          <figure className="w-full fixed top-[var(--nav-height)] left-0">
            <img
              src={backgroundPhoto?.url}
              alt={`${slug}-background`}
              className="w-full h-full object-contain"
            />
          </figure>
          <section
            className="min-h-[35vh] sm:min-h-[45vh] md:min-h-[50vh] 
              relative z-0 flex justify-start items-end overflow-hidden"
          >
            <div className="max-w-[var(--section-container-width)] mx-auto w-full flex justify-start items-center">
              <BackBtn
                onClick={() => {
                  navigateAndScroll({ anchor: 'works', domLink: '/' });
                }}
              />
              <h1
                className="relative z-10  font-black text-2xl lg:text-2xl text-white uppercase"
                style={{ boxShadow: 'rgba(149, 157, 165, 0.1) 0px 2px 2px' }}
              >
                {title}
              </h1>
            </div>
            <div className="bg-[var(--dark)] opacity-50 absolute top-0 left-0 w-full h-full"></div>
          </section>
          <section
            className="relative flex-1 bg-fixed bg-cover bg-no-repeat bg-[var(--bg-white-alt)]"
            style={{
              backgroundImage: `url(${setThemeVariant({
                light: images.bannerLight,
                dark: images.bannerDark,
              })})`,
            }}
          >
            <div className="section-container min-h-[unset]">
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_250px] gap-8">
                <article className="section-content gap-2 order-2 md:order-1">
                  <h3 className="section-sub-title text-2xl">Overview</h3>
                  <div className="flex">
                    <div className="grid grid-cols-1 gap-5 justify-start items-start">
                      <PortableText
                        value={description}
                        components={myPortableTextComponents}
                      />
                      <div className="flex justify-start items-center">
                        <Button containerClass="mr-4">Live Demo</Button>
                        <Button containerClass="mr-4">GitHub</Button>
                      </div>
                    </div>
                  </div>
                </article>
                <aside className="cursor-default order-1 md:order-2">
                  <div
                    className="p-5 rounded-lg bg-white dark:bg-[var(--dark-secondary)]"
                    style={{ boxShadow: 'var(--box-shadow-extra)' }}
                  >
                    <h4>Technologies</h4>
                    <ul className="list-disc list-inside leading-8 mt-2">
                      {techStack.map(({ name, _key }) => (
                        <li
                          key={_key}
                          className="dark:text-white marker:text-xl relative"
                        >
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </section>
          <BannerOverlay />
        </>
      )}
    </>
  );
};
export default PageWrap(SingleWork);
