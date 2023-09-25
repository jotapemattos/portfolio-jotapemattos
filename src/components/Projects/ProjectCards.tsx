import { ProjectsProps, projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

export const ProjectCards = () => {
  return (
    <>
      {projects.map((project: ProjectsProps, i) => (
        <Link
          key={project.id}
          className="w-full h-52 rounded-lg bg-zinc-100 dark:bg-zinc-900 backdrop-blur-md overflow-hidden grid grid-cols-2 gap-2 items-start border-t border-r border-primary/10 drop-shadow-[0_0_4px_rgba(49,49,49,0.2)] hover:scale-105 transition-transform duration-300"
          href={`/projects/${project.id}`}
        >
          <section className="w-full h-full">
            <Image src={project.thumbnail} alt={project.name + 'image'} />
          </section>
          <section className="w-full h-full flex flex-col justify-between items-end p-4 text-primary">
            <h1 className="text-xl font-bold">
              {i + 1}. {project.name}
            </h1>
          </section>
        </Link>
      ))}
    </>
  );
};

ProjectCards;
