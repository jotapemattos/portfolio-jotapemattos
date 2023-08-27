'use client';

import { motion as m } from 'framer-motion';
import { Button } from '../ui/Button';
import { calculateAge } from '@/utils/functions/calculateAge';
import Link from 'next/link';

export const MainContent = () => {
  const age = calculateAge();

  return (
    <main className="w-full min-h-full h-screen flex flex-col items-center justify-center relative">
      <div className="w-[1300px] h-fit flex flex-col items-start gap-4">
        <m.h1
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="text-5xl md:text-5xl font-extrabold w-5/6 md:w-full text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary"
        >
          Hi there, João Pedro here.
        </m.h1>

        <m.h2
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="text-3xl md:text-3xl text-primary font-bold w-4/5 md:w-full"
        >
          I&apos;m a {age} years old Front-end Developer from 🇧🇷 Brazil.
        </m.h2>

        <span className="flex flex-col items-start gap-10">
          <m.h3
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.6 }}
            className="text-xl md:text-xl text-primary font w-4/5 md:w-auto"
          >
            Making code & design dancing in harmony.
          </m.h3>
          <m.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <a href="/resume.pdf" target="_blank">
              <Button variant="default" size="lg">
                Check out my resume!
              </Button>
            </a>
            <Link href="#about">
              <Button variant="outline" size="default" className="h-11">
                About me
              </Button>
            </Link>
          </m.div>
        </span>
      </div>
    </main>
  );
};
