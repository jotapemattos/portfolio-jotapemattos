import { List, X } from "phosphor-react"
import { BsList } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

interface HeaderProps {
  isOpen: boolean,
  setIsOpen: (b: boolean) => void
}

const Header = ({isOpen, setIsOpen}: HeaderProps) => {
  

  return (
    <div className='header min-w-full min-h-header py-10 h-header flex items-center justify-between fixed top-0 left-0 right-0 z-10'>
      <div className="w-1/2 flex p-4 lg:p-12">
        <div className="w-14 h-14">
          <img src="/logo.svg" alt=""/>
        </div>
      </div>
      <div className="w-1/3 lg:w-1/2 xl:w-1/2 p-4 lg:p-12 hidden lg:flex xl:flex items-baseline justify-end lg:justify-end xl:justify-end text-slate-200">
          <div className="w-full flex items-center justify-end font-main text-sm font-bold lg:gap-10">
            <div className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300">
            <a href="#home">Home</a>
            </div>
            <div className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300">
              <a href="#projects">Projects</a>
            </div>
            <div className="flex gap-2 cursor-pointer hover:text-contrast-color transition-colors duration-300">
            <a href="#contact">Contact</a>
            </div>
          </div>
      </div>
      {!isOpen ? 
        (
          <div>
            <div className="w-1/3 p-4 lg:p-12 lg:hidden flex items-center justify-center relative">
              <button 
                className="w-full h-full"
                onClick={() => setIsOpen(true)}
              >
                <BsList size={32} color="#03fcb1"/>
              </button>
            </div>
          </div>
        ):(
          <div>
            <div className='w-1/3 p-4 lg:p-12  flex items-center justify-center relative'>
            <button onClick={() => setIsOpen(false)}>
              <AiOutlineClose size={32} color='#03fcb1'/>
            </button>
          </div>
          </div>
        )
      }
    </div>
  )
}

export default Header