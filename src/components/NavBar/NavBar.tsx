'use client';

import Link from 'next/link';
import { ThemeToggle } from '../ui/ThemeToggle';
import HamburguerMenu from './HamburguerMenu';
import { FolderOpenDot, Home, User2 } from 'lucide-react';
import { Button } from '../ui/Button';
import SocialMedia from '../SocialMedia';

const NavBar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-between p-2 md:p-10 fixed z-10 inset-">
      <Link href="/" className="w-1/3">
        <img src="/logo-withoutbg.svg" alt="logo-image" className="w-8 h-8" />
      </Link>
      <nav className="w-full md:w-4/5 lg:w-fit xl:w-fit h-14 flex items-center justify-center p-6 text-primary bg-background/30 bg-opacity-10 backdrop-blur-sm rounded-full drop-shadow-lg border border-border">
        <Link onClick={() => window.scroll(0, 0)} href={'/'}>
          <Button
            variant="ghost"
            className="flex items-center justify-center gap-2 font-bold"
          >
            <Home size={16} />
            Home
          </Button>
        </Link>
        <Link href="/projects">
          <Button
            variant="ghost"
            className="flex items-center justify-center gap-2 font-bold"
          >
            <FolderOpenDot size={16} />
            Projects
          </Button>
        </Link>
        <Link href="#contact">
          <Button
            variant="ghost"
            className="flex items-center justify-center gap-2 font-bold"
          >
            <User2 size={16} />
            Contact
          </Button>
        </Link>

        <ThemeToggle />
        <div className="flex items-center lg:hidden">
          <ThemeToggle />
          <HamburguerMenu />
        </div>
      </nav>
      <section className=" w-1/3">
        <SocialMedia />
      </section>
    </div>
  );
};

export default NavBar;
