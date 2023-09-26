import ToolsCards from '@/components/HomeContent/ToolsCards';
import { ProjectImagesCarousel } from '@/components/Projects/ProjectImagesCarousel';
import { Button } from '@/components/ui/Button';

import { ProjectsProps, projects } from '@/data/projects';
import { ArrowUpRight, GithubIcon } from 'lucide-react';
import Link from 'next/link';

interface SlugProps {
  params: {
    id: number;
  };
}

const page = ({ params }: SlugProps) => {
  const [singleProject] = projects.filter(
    (project: ProjectsProps) => project.id === Number(params.id)
  );

  return (
    <main className="w-full min-h-full flex items-center justify-center pt-40 pb-20">
      <div className="w-1/2 h-full flex flex-col items-start gap-6">
        <header className="w-full flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            0{singleProject.id}. {singleProject.name}
          </h1>
          <span className="flex items-center gap-6">
            <Link href={singleProject.githubRepo} target="_blank">
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:text-primary/75 transition-colors duration-300"
              >
                Github
                <GithubIcon size={18} />
              </Button>
            </Link>
            <Link href={singleProject.website} target="_blank">
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:text-tertiary transition-colors duration-300"
              >
                Deployed project
                <ArrowUpRight size={18} />
              </Button>
            </Link>
          </span>
        </header>
        <ProjectImagesCarousel singleProject={singleProject} />
        <article className="space-y-2 text-justify">
          <h2 className="text-2xl font-bold italic">Elucidation</h2>
          <p>{singleProject.description}</p>
        </article>
        <span className="space-y-4">
          <h2 className="text-2xl font-bold italic">Stack</h2>
          <section className="w-full flex gap-6">
            {singleProject.techs.map((tech, i) => (
              <ToolsCards key={i} tool={tech} index={i} />
            ))}
          </section>
        </span>
      </div>
    </main>
  );
};

export default page;
