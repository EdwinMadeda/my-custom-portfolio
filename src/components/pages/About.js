const About = () => {
  return (
    <section name="about" className="bg-[var(--bg-white-alt)]">
      <div className="section-container">
        <div>
          <h3 className="section-title">About</h3>
        </div>

        <div className="w-full grid sm:grid-cols-2 gap-8 px-4">
          <h2 className="sm:text-right section-sub-title">
            Hi. Nice to meet you. <br /> Please take a look around.
          </h2>
          <p>
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
