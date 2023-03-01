import { X } from 'phosphor-react'

interface MobileHamburguerProps {
  isOpen: boolean
}

const MobileList = ({isOpen}: MobileHamburguerProps) => {
  return (
    <div className='w-screen h-1/2 mt-20 shadow-xl  z-50 text-slate-200'>
      {isOpen && (<div className='w-screen h-full z-50 text-slate-200'>
      <div className="w-full h-full py-10 flex flex-col items-center justify-evenly gap-8 font-main text-sm font-extrabold">
            <div className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300">
              <p className="text-contrast-color">01.</p>
              <p>Home</p>
            </div>
            <div className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300">
              <p className="text-contrast-color">02.</p>
              <p>Projects</p>
            </div>
            <div className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300">
              <p className="text-contrast-color">03.</p>
              <p>Contact</p>
            </div>
          </div>
      </div>)}
    </div>
  )
}

export default MobileList