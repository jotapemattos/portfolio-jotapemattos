import { motion as m } from "framer-motion"

interface MobileListProps {
  isOpen: boolean,
  setIsOpen: (b:boolean) => void
}

const MobileList = ({isOpen, setIsOpen}: MobileListProps) => {
  return (
    <m.div 
      initial={{ x: '-100vw', opacity: 0}}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='mobile-list w-screen h-screen shadow-xl text-slate-200 absolute left-0 mt-2'
    >
      {isOpen && (<div className='w-screen h-full z-50 text-slate-200'>
      <div className="w-full h-full py-10 flex flex-col items-center justify-evenly gap-8 font-main text-sm font-extrabold">
            <m.div 
              initial={{ x: '-100vw', opacity: 0}}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300"
            >
              <p className="text-contrast-color">01.</p>
              <a href="#home" onClick={()=> setIsOpen(false)}>Home</a>
            </m.div>
            <m.div 
              initial={{ x: '-100vw', opacity: 0}}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300"
            >
              <p className="text-contrast-color">02.</p>
              <a href="#projects" onClick={()=> setIsOpen(false)}>Project</a>
            </m.div>
            <m.div 
              initial={{ x: '-100vw', opacity: 0}}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300"
            >
              <p className="text-contrast-color">03.</p>
              <a href="#contact" onClick={()=> setIsOpen(false)}>Contact</a>
            </m.div>
          </div>
      </div>)}
    </m.div>
  )
}

export default MobileList