'use client';

import Link from 'next/link';
import { ThemeToggle } from '../ui/ThemeToggle';
import { FolderOpenDot, Home, User2 } from 'lucide-react';
import { Button } from '../ui/Button';
import SocialMedia from '../SocialMedia';

const NavBar = () => {
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <header className="w-full h-24 flex items-center justify-between gap-4 md:gap-0 p-2 md:p-10 fixed z-10 inset-0 backdrop-blur-sm">
      <Link href="/" className="lg:w-1/3 hidden md:block" onClick={handleClick}>
        <img src="/logo-withoutbg.svg" alt="logo-image" className="w-8 h-8" />
      </Link>
      <nav className="w-full md:w-fit h-14 flex items-center justify-center p-2 md:p-6 text-primary bg-background/30 bg-opacity-10 backdrop-blur-sm rounded-full drop-shadow-lg border border-border">
        <Link onClick={handleClick} href={'/'}>
          <Button
            variant="ghost"
            className="flex items-center justify-center gap-2 font-medium"
            onClick={handleClick}
          >
            <Home size={16} className="max-[320px]:hidden min-[375px]:block" />
            Home
          </Button>
        </Link>
        <Link href="/projects">
          <Button
            variant="ghost"
            className="flex items-center justify-center gap-2 font-medium"
          >
            <FolderOpenDot
              size={16}
              className="max-[320px]:hidden min-[375px]:block"
            />
            Projects
          </Button>
        </Link>
        <Link href="/#contact">
          <Button
            variant="ghost"
            className="flex items-center justify-center gap-2 font-medium"
          >
            <User2 size={16} className="max-[320px]:hidden min-[375px]:block" />
            Contact
          </Button>
        </Link>
        <ThemeToggle />
      </nav>
      <section className="lg:w-1/3 hidden md:block">
        <SocialMedia />
      </section>
    </header>
  );
};

export default NavBar;
