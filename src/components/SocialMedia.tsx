'use client';

import { getIconColors } from '@/utils/functions/pickColor';

import { motion as m } from 'framer-motion';
import { useTheme } from 'next-themes';

import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

type Theme = 'dark' | 'light';

const SocialMedia = () => {
  const { theme } = useTheme();
  const iconColor = getIconColors(theme as Theme);

  return (
    <div className="flex items-center justify-end gap-6">
      <m.span
        initial={{ y: '2vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-tl from-background to-primary/30 rounded-full p-[0.5px] group"
      >
        <a
          href="https://github.com/jotapemattos"
          target="_blank"
          className="rounded-full flex items-center justify-center p-[12px] bg-background hover:bg-background/90"
          rel="noreferrer"
        >
          <GithubIcon
            className="group-hover:stroke-slate-600 transition-colors duration-300"
            color={iconColor}
            size={18}
          />
        </a>
      </m.span>

      <m.span
        initial={{ y: '2vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-tl from-background to-primary/30 rounded-full p-[0.5px] group"
      >
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-pedro-mattos-rodrigues-camargo/"
          target="_blank"
          className="rounded-full flex items-center justify-center p-[12px] bg-background group-hover:bg-background/90"
          rel="noreferrer"
        >
          <LinkedinIcon
            color={iconColor}
            size={18}
            className="group-hover:stroke-blue-500 transition-colors duration-300"
          />
        </a>
      </m.span>

      <m.span
        initial={{ y: '2vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-tl from-background to-primary/30 rounded-full p-[0.3px] group"
      >
        <a
          href="mailto:jpmrc49@gmail.com"
          target="_blank"
          className="rounded-full flex items-center justify-center p-[12px] bg-background hover:bg-background/90"
          rel="noreferrer"
        >
          <Mail
            color={iconColor}
            size={18}
            className="group-hover:stroke-yellow-600 dark:group-hover:stroke-yellow-400 transition-colors duration-300"
          />
        </a>
      </m.span>
    </div>
  );
};

export default SocialMedia;
