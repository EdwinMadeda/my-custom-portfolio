import { useContext } from 'react';
import { ButtonLight } from '../../Button';
import Store from '../../../contexts/Store';

const Work = () => {
  const { WORKS } = useContext(Store);

  return (
    <section
      name="works"
      className=""
      /*py-10 bg-[var(--bg-white-alt)]*/
      // style={{ background: 'rgb(4, 8, 54,.4)' }}
    >
      <div className="section-container items-start md:items-center">
        <h2 className="section-title ">Work</h2>
        <h3 className="section-sub-title">Check out some of my recent works</h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 pt-10 pb-6 z-0">
          {WORKS.map(({ id, name, thumbnail, slug, techStack }) => (
            <div
              key={id}
              className="rounded-lg w-full max-h-[300px] h-full cursor-pointer relative overflow-hidden 
              group/thumbnail thumbnail"
              style={{ boxShadow: 'var(--box-shadow-extra)' }}
            >
              <figure
                className="rounded-lg object-contain w-full h-full bg-white 
              dark:bg-[var(--dark-secondary)]"
              >
                <img
                  src={thumbnail}
                  alt="thumbnail"
                  className="rounded w-full h-full object-contain bg-white dark:bg-[var(--dark-secondary)]"
                />
              </figure>
              <div
                className="absolute bottom-0  opacity-0 rounded-lg h-full w-full
                 thumbnail__Overlay"
                style={{ background: 'rgba(4, 8, 54, 0.316)' }}
              ></div>
              <div
                className="absolute bottom-0 opacity-0 rounded-lg h-full w-full z-10 flex flex-col justify-center items-center -translate-y-[10%] 
                group-hover/thumbnail:translate-y-0 group-hover/thumbnail:opacity-100
                transition-all duration-500 ease-in thumbnail__Overlay--content"
              >
                <div className="p-3">
                  <h3 className="text-xl text-white text-center uppercase p-1">
                    {name}
                  </h3>
                  <h4 className="text-xl text-white text-center capitalize p-1">
                    {techStack[0]}
                  </h4>
                </div>
                <ButtonLight to={`works/${slug}`} linkType={'dom'}>
                  More Info
                </ButtonLight>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Work;
