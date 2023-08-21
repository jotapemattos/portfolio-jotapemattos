'use client';

import Link from 'next/link';
import { ThemeToggle } from '../ui/ThemeToggle';
import HamburguerMenu from './HamburguerMenu';

const NavBar = () => {
  return (
    <nav className="min-w-full py-10 h-10 flex items-center justify-between fixed top-0 left-0 right-0 z-10">
      <section className="flex p-4 lg:p-12">
        <Link href="/">
          <div className="w-14 h-14">
            <img src="/logo.svg" alt="logo-image" />
          </div>
        </Link>
      </section>
      <section className="p-4 lg:p-12 hidden lg:flex xl:flex items-center justify-end lg:justify-end xl:justify-end gap-10 text-sm text-primary font-bold">
        <Link
          className="flex gap-2 cursor-pointer hover:text-secondary transition-colors duration-300"
          onClick={() => window.scroll(0, 0)}
          href={'/'}
        >
          Home
        </Link>
        <Link
          href="#projects"
          className="flex gap-2 cursor-pointer hover:text-secondary transition-colors duration-300"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="flex gap-2 cursor-pointer hover:text-secondary transition-colors duration-300"
        >
          Contact
        </Link>
        <ThemeToggle />
      </section>
      <HamburguerMenu />
    </nav>
  );
};

export default NavBar;
