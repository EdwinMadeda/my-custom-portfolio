import { useContext } from 'react';
import Store from '../../contexts/Store';

const Skills = () => {
  const { SKILLS } = useContext(Store);

  return (
    <section
      name="skills"
      className=""
      /*bg-[var(--bg-gray)]*/
    >
      <div className="section-container items-start">
        <div>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="section-content">
          <h3 className="section-sub-title">
            These are the technologies I've worked with
          </h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 text-center">
            {SKILLS.map(({ _id, label, img }) => (
              <div
                key={_id}
                className="hover:scale-110 duration-500 bg-white dark:bg-[var(--dark-secondary)] rounded-lg
                p-5 min-h-30 
                flex flex-col justify-center items-center"
                style={{ boxShadow: 'var(--box-shadow-extra)' }}
              >
                <img
                  src={img.url}
                  alt={`${label} Icon`}
                  className="w-[3rem] mx-auto"
                />
                <h4 className="mt-2 cursor-default">{label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
