import { useContext } from 'react';
import { ButtonLight } from '../../components/Button';
import Store from '../../contexts/Store';

const Works = () => {
  const { WORKS } = useContext(Store);

  return (
    <>
      {WORKS.length > 0 && (
        <section
          name="works"
          className="dark:bg-transparent"
          /*bg-[var(--bg-white-alt)]*/
          // style={{ background: 'rgb(4, 8, 54,.4)' }}
        >
          <div className="section-container">
            <div>
              <h2 className="section-title">Works</h2>
            </div>

            <div className="section-content">
              <h3 className="section-sub-title">
                Check out some of my recent works
              </h3>

              <div className="w-full grid grid-cols-[minmax(0,_1fr)] gap-5 md:grid-cols-2 lg:gap-5 z-0">
                {WORKS.map(({ _id, title, thumbnail, slug, techStack }) => (
                  <div
                    key={_id}
                    className="rounded-lg max-w-[550px]  max-h-[350px] h-full cursor-pointer relative overflow-hidden 
                            group/thumbnail thumbnail"
                    style={{
                      boxShadow: 'var(--box-shadow-extra)',
                    }}
                  >
                    <figure
                      className="rounded-lg object-contain w-full h-full bg-white 
                            dark:bg-[var(--dark-secondary)] p-2"
                    >
                      <img
                        src={thumbnail?.url}
                        alt={slug}
                        className="rounded-lg w-full h-full object-contain bg-white dark:bg-[var(--dark-secondary)]"
                      />
                    </figure>
                    <div
                      className="absolute bottom-0  opacity-0 rounded-lg h-full w-full
             thumbnail__Overlay"
                      style={{ background: 'rgba(4, 8, 54, 0.616)' }}
                    ></div>
                    <div
                      className="absolute bottom-0 opacity-0 rounded-lg h-full w-full z-10 flex flex-col justify-center items-center -translate-y-[10%] 
            group-hover/thumbnail:translate-y-0 group-hover/thumbnail:opacity-100
            transition-all duration-500 ease-in thumbnail__Overlay--content"
                    >
                      <div className="p-3">
                        <h3 className="text-[1.15rem] text-white text-center uppercase p-1">
                          {title}
                        </h3>
                        <h4 className="text-[1.15rem] text-white text-center capitalize p-1">
                          {techStack.find(
                            ({ designation }) => designation === 'mainHighlight'
                          )?.name ?? techStack[0].name}
                        </h4>
                      </div>
                      <ButtonLight domLink={`/${slug}`}>Learn More</ButtonLight>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Works;
