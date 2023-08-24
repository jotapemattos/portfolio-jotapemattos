import Link from 'next/link';

interface IsOpenProps {
  setIsOpen: (b: boolean) => void;
}

const MobileMenu = ({ setIsOpen }: IsOpenProps) => {
  return (
    <div className="w-full h-screen bg-background left-0 absolute p-4 text-primary flex flex-col items-end justify-start">
      <span className="flex flex-col pt-10 gap-20 items-end text-primary text-2xl font-bold">
        <Link href={'/'} onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href={'/produtos'} onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link href={'/encomendas'} onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </span>
    </div>
  );
};

export default MobileMenu;
