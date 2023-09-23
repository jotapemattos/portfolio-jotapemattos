'use client';

import { ProjectsProps } from '@/data/projects';

interface singleProjectProps {
  singleProject: ProjectsProps;
}

export const ProjectImagesCarousel = (singleProject: singleProjectProps) => {
  return (
    <div className="w-full h-full">{singleProject.singleProject.name}</div>
  );
};
