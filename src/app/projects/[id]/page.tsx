import ToolsCards from '@/components/HomeContent/ToolsCards';
import { ProjectImagesCarousel } from '@/components/Projects/ProjectImagesCarousel';

import { ProjectsProps, projects } from '@/data/projects';

interface SlugProps {
  params: {
    id: number;
  };
}

const page = ({ params }: SlugProps) => {
  const [singleProject] = projects.filter(
    (project: ProjectsProps) => project.id === Number(params.id)
  );
  console.log('oi');
  return (
    <main className="w-full min-h-full flex items-center justify-center pt-40 pb-20">
      <div className="w-1/2 h-full flex flex-col items-start gap-6">
        <h1 className="text-3xl font-bold">
          0{singleProject.id}.{singleProject.name}
        </h1>
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
