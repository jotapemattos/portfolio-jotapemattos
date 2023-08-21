import Link from 'next/link';

interface IsOpenProps {
  setIsOpen: (b: boolean) => void;
}

const MobileMenu = ({ setIsOpen }: IsOpenProps) => {
  return (
    <div className="w-full h-screen left-0  absolute p-4 text-white flex flex-col items-end justify-start">
      <span className="flex flex-col pt-10 gap-20 items-end text-white text-2xl font-bold">
        <Link href={'/'} onClick={() => setIsOpen(false)}>
          Sobre
        </Link>
        <Link href={'/produtos'} onClick={() => setIsOpen(false)}>
          Produtos
        </Link>
        <Link href={'/encomendas'} onClick={() => setIsOpen(false)}>
          Encomendas
        </Link>
      </span>
    </div>
  );
};

export default MobileMenu;
