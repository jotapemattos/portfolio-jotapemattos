import { ProjectCards } from '@/components/Projects/ProjectCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'João Pedro | Projects'
};

const page = () => {
  return (
    <main className="w-full min-h-full flex items-center justify-center pt-40 pb-20 px-10">
      <div className="w-full lg:w-3/4 xl:w-1/2 h-full flex flex-col items-start gap-20 p-4 sm:p-0">
        <section className="space-y-4">
          <h1 className="font-bold text-primary text-3xl">Projects</h1>
          <p className="text-primary text-justify">
            Here you can find some of what I&apos;m capable to do. These are
            projects that I put a lot of effort into, and through the code, they
            bring solutions to problems faced by people.
          </p>
        </section>
        <section className="w-full space-y-10">
          <ProjectCards />
        </section>
      </div>
    </main>
  );
};

export default page;
