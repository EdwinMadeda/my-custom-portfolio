import { useContext } from 'react';

import Store from '../../contexts/Store';

const Skills = () => {
  const { SKILLS } = useContext(Store);

  return (
    <>
      <section name="skills" className="py-10 bg-[var(--bg-gray)]">
        <div className="section-container items-start">
          <h2 className="section-title ">Skills</h2>
          <h3 className="section-sub-title">
            These are the technologies I've worked with
          </h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 text-center py-5">
            {SKILLS.map(({ label, img }) => (
              <div
                key={label}
                className="hover:scale-110 duration-500 bg-white rounded-lg p-5 
                flex flex-col justify-center items-center"
                style={{ boxShadow: '0 25px 70px rgb(0 0 0 / 7%)' }}
              >
                <img src={img} alt={`${label} Icon`} className="w-10 mx-auto" />
                <h4 className="mt-2 cursor-default">{label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
