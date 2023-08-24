'use client';

import { getIconColors } from '@/utils/functions/pickColor';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail
} from '@tabler/icons-react';

import { motion as m } from 'framer-motion';
import { useTheme } from 'next-themes';

type Theme = 'dark' | 'light';

const SocialMedia = () => {
  const { theme } = useTheme();
  const iconColor = getIconColors(theme as Theme);

  return (
    <aside className="w-full lg:w-fit h-full flex justify-end lg:fixed lg:top-0 lg:right-10 xl:right-24">
      <div className="flex lg:flex-col items-center justify-end gap-8">
        <m.a
          initial={{ y: '50vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          href="https://github.com/jotapemattos"
          target="_blank"
        >
          <IconBrandGithub
            size={28}
            color={iconColor}
            className="hover:-translate-y-1 hover:text-secondary hover:scale-110 transition-all duration-300"
          />
        </m.a>

        <m.a
          initial={{ y: '50vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          href="https://www.linkedin.com/in/jo%C3%A3o-pedro-mattos-rodrigues-camargo-23b52a25b/"
          target="_blank"
        >
          <IconBrandLinkedin
            size={28}
            color={iconColor}
            className=" hover:-translate-y-1 hover:text-secondary hover:scale-110 transition-all duration-300"
          />
        </m.a>

        <m.a
          initial={{ y: '50vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1 }}
          href="mailto:jpmrc49@gmail.com"
          target="_blank"
        >
          <IconMail
            size={28}
            color={iconColor}
            className="hover:-translate-y-1 hover:text-tertiary hover:scale-110 transition-all duration-300"
          />
        </m.a>

        <m.div
          initial={{ height: '0px', opacity: 0 }}
          animate={{ height: '112px', opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-px hidden lg:flex h-28 bg-primary"
        ></m.div>
      </div>
    </aside>
  );
};

export default SocialMedia;
