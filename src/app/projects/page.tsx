import { ProjectCards } from '@/components/Projects/ProjectCards';

const page = () => {
  return (
    <div className="w-full min-h-full flex items-center justify-center pt-40 pb-20">
      <main className="w-1/2 h-full flex flex-col items-start gap-20">
        <section className="space-y-4">
          <h2 className="font-bold text-primary text-3xl">Projects</h2>
          <p className="text-primary">
            Here you can find some of what I&apos;m capable to do. These are
            projects that I put a lot of effort into, and through the code, they
            bring solutions to problems faced by people.
          </p>
        </section>
        <section className="w-full space-y-10">
          <ProjectCards />
        </section>
      </main>
    </div>
  );
};

export default page;