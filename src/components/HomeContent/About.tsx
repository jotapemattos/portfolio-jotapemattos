import ToolsCards from './ToolsCards';

const About = () => {
  return (
    <div className="w-full max-h-full flex items-center justify-center p-8">
      <div className="w-[1300px] flex flex-col gap-20">
        <section className="w-full h-fit flex flex-col items-start justify-center gap-4 bg-background rounded-xl">
          <h1 id="about" className="font-bold text-primary text-3xl">
            About me
          </h1>
          <div className="flex flex-col h-auto items-start gap-2">
            <p className="">
              I&apos;m a frontend developer who is passionate about solving
              problems and learning the best way to do it. I love building
              charming interfaces and I&apos;m always very excited to discover
              more and more about the languages, frameworks and libraries I use,
              and also learn new technologies.
            </p>
            <p className="flex items-center gap-1">
              {' '}
              I am currently graduating in Systems Analysis and Development at
              <a
                href="https://www.ifsp.edu.br/"
                target="_blank"
                className="hover:text-emerald-500 hover:underline transition-colors duration-200"
                rel="noreferrer"
              >
                @IFSP.
              </a>
            </p>
          </div>
        </section>
        <section className="w-full h-full flex flex-col items-start justify-center gap-4">
          <h1 className="font-bold text-primary text-3xl">Stack</h1>
          <div className="grid grid-cols-3 gap-6">
            <ToolsCards />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
