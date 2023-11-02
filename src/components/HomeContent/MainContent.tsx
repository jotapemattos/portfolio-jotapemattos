'use client';

import { motion as m } from 'framer-motion';
import { Button } from '../ui/Button';
import { calculateAge } from '@/utils/functions/calculateAge';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const MainContent = () => {
  const age = calculateAge();

  return (
    <main className="w-full min-h-full h-screen flex flex-col items-center justify-center relative ">
      <span className="main-content w-full h-full relative rounded-lg dark:opacity-30" />
      <div className="absolute w-full xl:w-[1300px] h-fit p-4 xl:p-0 flex flex-col xl:items-start gap-4">
        <m.h1
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="text-4xl lg:text-5xl font-extrabold w-full text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary"
        >
          Hi there, João Pedro here.
        </m.h1>

        <m.h2
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="text-2xl lg:text-3xl text-primary font-bold w-full"
        >
          I&apos;m a {age} years old Front-end Developer from 🇧🇷 Brazil.
        </m.h2>

        <span className="flex flex-col items-start gap-10">
          <m.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.6 }}
            className="flex items-center gap-2 text-lg text-primary w-full"
          >
            <h3>Building great digital experiences at</h3>
            <Link
              href="https://www.intranetmall.com.br/br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:underline hover:decoration-blue-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap"
            >
              @IntranetMall
              <ArrowUpRight
                size={22}
                className="opacity-0 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300"
              />
            </Link>
          </m.span>
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
              <Button
                variant="outline"
                size="default"
                className="flex items-center h-11 gap-2"
              >
                About me
                <ArrowDown size={18} />
              </Button>
            </Link>
          </m.div>
        </span>
      </div>
    </main>
  );
};
