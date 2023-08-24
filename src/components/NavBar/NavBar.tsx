'use client';

import Link from 'next/link';
import { ThemeToggle } from '../ui/ThemeToggle';
import HamburguerMenu from './HamburguerMenu';
import { FolderOpenDot, Home, User2 } from 'lucide-react';
import { Button } from '../ui/Button';

const NavBar = () => {
  return (
    <div className="w-full h-24 flex items-center md:items-center justify-center p-2 md:p-0 absolute z-10 inset-0">
      <nav className="w-full md:w-4/5 lg:w-fit xl:w-fit h-16 flex items-center justify-between p-2 text-primary bg-background/30 bg-opacity-10 backdrop-blur-sm rounded-full drop-shadow-lg border border-border">
        <section className="flex p-4">
          <Link href="/">
            <img
              src="/logo-withoutbg.svg"
              alt="logo-image"
              className="w-6 h-6"
            />
          </Link>
        </section>
        <section className="p-4 hidden lg:flex xl:flex items-center justify-end lg:justify-end xl:justify-end gap-2 text-sm text-primary ">
          <Link onClick={() => window.scroll(0, 0)} href={'/'}>
            <Button
              variant="ghost"
              className="flex items-center justify-center gap-2 font-bold"
            >
              <Home size={20} />
              Home
            </Button>
          </Link>
          <Link href="/projects">
            <Button
              variant="ghost"
              className="flex items-center justify-center gap-2 font-bold"
            >
              <FolderOpenDot size={20} />
              Projects
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              variant="ghost"
              className="flex items-center justify-center gap-2 font-bold"
            >
              <User2 size={20} />
              Contact
            </Button>
          </Link>
        </section>
        <section className="p-4 hidden lg:flex">
          <ThemeToggle />
        </section>
        <div className="flex items-center lg:hidden">
          <ThemeToggle />
          <HamburguerMenu />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
