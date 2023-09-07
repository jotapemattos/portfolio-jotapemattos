'use client';

import Image from 'next/image';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/HoverCard';
import ToolsCards from './ToolsCards';
import ifsp from '../../assets/ifsp.svg';
import Gradient from '../Gradient';

const About = () => {
  return (
    <div
      id="about"
      className="about w-full max-h-full flex items-center justify-center p-8 bg-background overflow-hidden relative"
    >
      <div className="w-[1300px] flex flex-col gap-20 relative">
        <section className="w-full h-fit flex flex-col items-start justify-center gap-10 text-justify">
          <h1 className="font-bold text-primary text-3xl">
            Introducing myself
          </h1>
          <article className="flex flex-col h-auto items-start gap-2">
            <h2 className="font-bold text-primary text-2xl">How I started?</h2>
            <p>
              The genesis of my software engineering journey began with a
              pivotal moment in early 2022 when a friend introduced me to the
              profound capabilities of a software engineer. At the time, I
              remember he made a simple clone of Twitter, the home page. This
              further fueled my long-standing fascination with technology, which
              had been nurtured since my childhood. It is this enduring passion
              that propelled me to my current position.
            </p>
          </article>

          <article className="flex flex-col h-auto items-start gap-2 ">
            <h2 className="font-bold text-primary text-2xl">Nowadays</h2>
            <p className="text-justify">
              Now I am a dedicated frontend developer, driven by a relentless
              desire to solve complex problems and continually enhance my
              knowledge. I take great pride in crafting aesthetically pleasing
              and user-friendly interfaces. My enthusiasm for my work is matched
              only by my fervor for exploring and mastering the languages,
              frameworks, and libraries that underpin modern web development.
              Additionally, I am always eager to embrace and learn from emerging
              technologies.
            </p>
            <p className="flex items-center gap-1">
              {' '}
              Presently, I am in the process of completing my education,
              pursuing a degree in Systems Analysis and Development at
              <HoverCard>
                <HoverCardTrigger
                  href="https://www.ifsp.edu.br/"
                  target="_blank"
                  className="hover:text-emerald-600 hover:cursor-pointer underline transition-all duration-200"
                >
                  @IFSP.
                </HoverCardTrigger>
                <HoverCardContent className="flex items-start justify-center gap-2 text-sm bg-background">
                  <Image src={ifsp} alt="IFSP logo" width={40} />
                  <p>IFSP - Instituto Federal de São Paulo</p>
                </HoverCardContent>
              </HoverCard>
            </p>
            <br />
          </article>
        </section>
        <section className="w-full h-full flex flex-col items-start justify-center gap-4 relative z-50">
          <h1 className="font-bold text-primary text-3xl">Stack</h1>
          <div className="grid grid-cols-3 gap-6 ">
            <ToolsCards />
          </div>
        </section>
      </div>
      <Gradient className="absolute bottom-0 right-1/2 translate-y-2/3 translate-x-1/2 bg-secondary h-[200px] w-[650px] rounded-full opacity-25 blur-3xl" />
    </div>
  );
};

export default About;
