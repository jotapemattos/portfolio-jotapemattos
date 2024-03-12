'use client';
import { ProjectsProps } from '@/data/projects';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback } from 'react';
import { Button } from '../ui/Button';

interface singleProjectProps {
  singleProject: ProjectsProps;
}

export const ProjectImagesCarousel = ({
  singleProject
}: singleProjectProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {singleProject.images.map((image, index) => (
            <div className="embla__slide " key={index}>
              <Image src={image} alt="images" className="" />
            </div>
          ))}
        </div>
      </div>

      <span className="flex items-center justify-between w-full ">
        <Button onClick={scrollPrev} variant="ghost">
          <ArrowLeft />
        </Button>
        <Button onClick={scrollNext} variant="ghost">
          <ArrowRight />
        </Button>
      </span>
    </>
  );
};
