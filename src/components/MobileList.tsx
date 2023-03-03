import { X } from 'phosphor-react'

interface MobileHamburguerProps {
  isOpen: boolean
}

const MobileList = ({isOpen}: MobileHamburguerProps) => {
  return (
    <div className='mobile-list w-screen h-1/2 shadow-xl mt-8 z-10 text-slate-200 fixed'>
      {isOpen && (<div className='w-screen h-full z-50 text-slate-200'>
      <div className="w-full h-full py-10 flex flex-col items-center justify-evenly gap-8 font-main text-sm font-extrabold">
            <div className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300">
              <p className="text-contrast-color">01.</p>
              <a href="#home">Home</a>
            </div>
            <div className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300">
              <p className="text-contrast-color">02.</p>
              <a href="#projects">Project</a>
            </div>
            <div className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300">
              <p className="text-contrast-color">03.</p>
              <a href="#contact">Contact</a>
            </div>
          </div>
      </div>)}
    </div>
  )
}

export default MobileList