import { X } from 'phosphor-react'

interface MobileListProps {
  isOpen: boolean,
  setIsOpen: (b:boolean) => void
}

const MobileList = ({isOpen, setIsOpen}: MobileListProps) => {
  return (
    <div className='mobile-list w-screen h-screen shadow-xl text-slate-200 absolute left-0'>
      {isOpen && (<div className='w-screen h-full z-50 text-slate-200'>
      <div className="w-full h-full py-10 flex flex-col items-center justify-evenly gap-8 font-main text-sm font-extrabold">
            <div className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300">
              <p className="text-contrast-color">01.</p>
              <a href="#home" onClick={()=> setIsOpen(false)}>Home</a>
            </div>
            <div className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300">
              <p className="text-contrast-color">02.</p>
              <a href="#projects" onClick={()=> setIsOpen(false)}>Project</a>
            </div>
            <div className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300">
              <p className="text-contrast-color">03.</p>
              <a href="#contact" onClick={()=> setIsOpen(false)}>Contact</a>
            </div>
          </div>
      </div>)}
    </div>
  )
}

export default MobileList