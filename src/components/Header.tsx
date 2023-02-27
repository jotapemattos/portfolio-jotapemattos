import { List, X } from "phosphor-react"

interface HeaderProps {
  isOpen: boolean,
  setIsOpen: (b: boolean) => void
}

const Header = ({isOpen, setIsOpen}: HeaderProps) => {
  

  return (
    <div className='w-full min-h-header h-header flex items-center justify-between sticky z-0'>
      <div className="w-1/2 flex p-4 lg:p-12 mt-10">
        <div className="w-14 h-14">
          <img src="/header-logo.svg" alt=""/>
        </div>
      </div>
      <div className="w-1/3 lg:w-1/2 xl:w-1/2 p-4 lg:p-12 mt-10 hidden lg:flex xl:flex items-baseline justify-end lg:justify-end xl:justify-end text-slate-200">
          <div className="w-full flex items-center justify-end font-main text-sm font-bold lg:gap-10">
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
      </div>
      {!isOpen ? 
        (
          <div><div className="w-1/3 p-4 lg:p-12 mt-10 lg:hidden flex items-center justify-center">
    <button 
      className="w-full h-full"
      onClick={() => setIsOpen(true)}
    >
      <List size={32} weight='fill' color="#faf1a0"/>
    </button>
  </div></div>
        ):(
          <div>
            <div className='w-1/3 p-4 lg:p-12 mt-10 flex items-center justify-center'>
            <button onClick={() => setIsOpen(false)}>
              <X size={32} weight='fill' color='#faf1a0'/>
            </button>
          </div>
          </div>
        )
      }
    </div>
  )
}

export default Header