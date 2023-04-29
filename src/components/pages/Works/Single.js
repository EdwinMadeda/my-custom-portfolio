import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Store from '../../../contexts/Store';
import BannerOverlay3 from '../../BannerOverlay3';

const Single = () => {
  const { slug } = useParams();

  const { WORKS } = useContext(Store);
  const { name, thumbnail, techStack } = WORKS.find(
    (item) => item.slug === slug
  );

  return (
    <main className="pt-[var(--nav-height)] min-h-screen flex flex-col justify-start items-center">
      <figure className="fixed top-[var(--nav-height)] left-1/2 -translate-x-1/2 w-full -z-10">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-full h-full object-cover"
        />
      </figure>
      <section className="min-h-[40vh] relative z-0 flex justify-start items-end">
        <div className="max-w-[1000px] mx-auto w-full">
          <h1 className="relative z-10 text-white text-2xl uppercase">
            {name}
          </h1>
        </div>
        <div className="bg-[var(--dark)] opacity-50 absolute top-0 left-0 w-full h-full"></div>
      </section>
      <section className="bg-white flex-1">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="section-title text-sm">Project</h2>
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
            </article>
            <aside className="py-4 sm:ml-4 sm:min-w-[200px] cursor-default">
              <div className="p-5 rounded-lg shadow-sm shadow-[#000]">
                <h4>Technologies</h4>
                <ul className="list-disc list-inside leading-8 mt-2">
                  {techStack.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <BannerOverlay3 />
    </main>
  );
};
export default Single;
