import workImg from '../../assets/images/projects-thumbnails/workImg.jpeg';
import Button from '../Button';
const Work = () => {
  const projects = [
    {
      name: 'Project1',
      description: '',
      thumbnail: workImg,
      URL: null,
      codeURL: null,
    },
    {
      name: 'Project1',
      description: '',
      thumbnail: workImg,
      URL: null,
      codeURL: null,
    },
    {
      name: 'Project1',
      description: '',
      thumbnail: workImg,
      URL: null,
      codeURL: null,
    },
  ];

  return (
    <section
      name="work"
      className="py-10 bg-[var(--bg-white-alt)]"
      // style={{ background: 'rgb(4, 8, 54,.4)' }}
    >
      <div className="section-container items-start md:items-center">
        <h2 className="section-title ">Work</h2>
        <h3 className="section-sub-title">
          Check out some of my recent projects
        </h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 pt-10 pb-6 z-0">
          {projects.map(({ name, thumbnail }, index) => (
            <div
              className="rounded-lg  md:max-w-none  w-full h-[250px] md:h-[200px] lg:h-[300px] relative bg-white cursor-pointer group"
              style={{ boxShadow: 'var(--box-shadow-extra)' }}
              key={index}
            >
              <img
                src={thumbnail}
                alt="thumbnail"
                className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
              />
              <div
                className="absolute left-0 bottom-0 z-10 w-full h-0 bg-[var(--dark)] opacity-80 rounded-lg
                group-hover:h-full transition-all duration-500 ease-in-out"
              ></div>
              <div
                className="absolute left-0 bottom-0 z-20 w-full h-full flex flex-col justify-center 
              items-center p-8 opacity-0 group-hover:opacity-[1] transition-all duration-500 ease-in-out"
              >
                <h4 className="text-white text-xl mb-5">{name}</h4>
                <Button className="bg-white hover:border-white">
                  More Info
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Work;
