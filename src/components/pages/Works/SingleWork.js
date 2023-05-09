import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Store from '../../../contexts/Store';
import BannerOverlay from '../../BannerOverlay';
import { Button } from '../../Button';
import {
  IoArrowBackCircleSharp,
  IoArrowBackCircleOutline,
} from 'react-icons/io5';
import PageScroll from '../../../contexts/PageScrollContext';
import PageWrap from '../../PageWrap';

const SingleWork = () => {
  const { slug } = useParams();

  const { WORKS } = useContext(Store);
  const { name, thumbnail, techStack } = WORKS.find(
    (item) => item.slug === slug
  );
  const { navigateAndScroll } = useContext(PageScroll);

  return (
    <main className="pt-[var(--nav-height)] min-h-screen flex flex-col justify-start items-center">
      <section
        className="min-h-[250px] md:min-h-[300px] 
      relative z-0 flex justify-start items-end overflow-hidden"
      >
        <div className="max-w-[1000px] mx-auto w-full flex justify-start items-center">
          <button
            className=" relative text-white z-10 group/back-btn rounded-[50%] mr-4"
            onClick={() => {
              navigateAndScroll({ anchor: 'works', domLink: '/' });
            }}
          >
            <IoArrowBackCircleSharp className="text-4xl group-hover/back-btn:hidden" />
            <IoArrowBackCircleOutline className="text-4xl hidden group-hover/back-btn:block" />
          </button>
          <h1 className="relative z-10 text-white text-2xl uppercase">
            {name}
          </h1>
        </div>
        <div className="bg-[var(--dark)] opacity-30 absolute top-0 left-0 w-full h-full"></div>
        <figure className="w-full absolute top-0 left-0 -z-10">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="w-full h-full object-cover"
          />
        </figure>
      </section>
      <section className="flex-1">
        <div className="max-w-[1000px] mx-auto">
          <h3 className="section-title text-sm pb-2">Project</h3>
          <div className="flex flex-col-reverse sm:flex-row">
            <article>
              <h3 className="section-sub-title font-extrabold text-3xl">
                Overview
              </h3>
              <p className="py-4 order-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="inline-grid grid-cols-2 gap-5">
                <Button containerClass="">Code</Button>
                <Button containerClass="">Demo</Button>
              </div>
            </article>
            <aside className="py-4 sm:ml-4 sm:min-w-[200px] cursor-default">
              <div
                className="p-5 rounded-lg bg-white dark:bg-[var(--dark-secondary)]"
                style={{ boxShadow: 'var(--box-shadow-extra)' }}
              >
                <h4>Technologies</h4>
                <ul className="list-disc list-inside leading-8 mt-2">
                  {techStack.map((item, index) => (
                    <li key={index} className="dark:text-white">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <BannerOverlay />
    </main>
  );
};
export default PageWrap(SingleWork);
