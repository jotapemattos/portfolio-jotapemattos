import pomodoro from '../assets/pomodoro-image.svg'
import { ArrowSquareOut } from "phosphor-react"
import { BsGithub } from "react-icons/bs"

export const CurrentProject = () => {
  return (
    <div id="projects" className="projects-page min-h-full h-2-screen md:h-full md:min-h-full w-full flex justify-center">
      <div className="w-full md:w-4/5 h-4/5 lg:h-full flex flex-col items-center justify-between p-4 gap-10">
        <div className="flex w-full items-center justify-start md:pl-10">
          <span className="text-3xl text-slate-300 text-center font-main font-extrabold">{`<`}</span>
          <h1 className="text-3xl text-slate-300 text-center font-main font-extrabold">projects</h1>
          <span className="text-3xl text-slate-300 text-center font-main font-extrabold">{`>`}</span>
        </div>
        <div className="w-full md:w-4/5 h-full flex flex-col lg:flex-col sm:flex-row items-start">
          <div className='h-[500px] lg:h-1/2 w-full flex flex-col lg:flex-row items-start justify-start ml-6'>
            <h1 className='text-2xl lg:text-3xl font-main text-slate-300 font-bold lg:hidden'>01. Pomodoro App</h1>
            <img src={pomodoro} alt="" className='lg:w-1/2 lg:h-full w-full'/>
            <div className='w-full h-96 py-4 flex flex-col items-start justify-start gap-20'>
              <h1 className='text-3xl font-main text-slate-300 font-bold hidden lg:block'>01. Pomodoro App</h1>
              <div className='w-96 flex flex-col justify-between gap-8'>
                <p className='w-96 text-justify text-lg text-slate-300'>Project developed for my portfolio. However, it was built with the intention of impacting some student friends, explaining how the method works and bringing a nice interface. I hope it helps in some way!</p>
                <div className='flex w-full justify-around'>
                  <a href=""><BsGithub size={24} color="#A5B4FC" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
                  <a href=""><ArrowSquareOut size={26} color="#A5B4FC" weight="fill" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
                </div>
              </div>
            </div>
          </div>
          <div className='h-[500px] lg:h-1/2 w-full flex flex-col lg:flex-row items-start justify-start ml-6'>
            <h1 className='text-3xl font-main text-slate-300 font-bold lg:hidden'>01. Pomodoro App</h1>
            <img src={pomodoro} alt="" className='lg:w-1/2 lg:h-full w-full'/>
            <div className='w-full h-96 py-4 flex flex-col items-start justify-start gap-20'>
              <h1 className='text-3xl font-main text-slate-300 font-bold hidden lg:block'>01. Pomodoro App</h1>
              <div className='w-96 flex flex-col justify-between gap-8'>
                <p className='w-96 text-justify text-lg text-slate-300'>Project developed for my portfolio. However, it was built with the intention of impacting some student friends, explaining how the method works and bringing a nice interface. I hope it helps in some way!</p>
                <div className='flex w-full justify-around'>
                  <a href=""><BsGithub size={24} color="#A5B4FC" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
                  <a href=""><ArrowSquareOut size={26} color="#A5B4FC" weight="fill" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-4/5 justify-center mr-10">
          <div className="w-full flex justify-end">
            <button className="flex items-center gap-2 text-md py-2 px-8 text-contrast-color border border-contrast-color rounded-sm p-2 hover:bg-contrast-color/20 transition-colors duration-200">
              More projects 
              <ArrowSquareOut size={20} color="#03fcb1" weight="fill" />
            </button>
          </div>
        </div>
        <div className="flex w-full items-start justify-start md:pl-10">
          <span className="text-3xl text-slate-300 text-center font-main font-extrabold">{`</`}</span>
          <h1 className="text-3xl text-slate-300 text-center font-main font-extrabold">projects</h1>
          <span className="text-3xl text-slate-300 text-center font-main font-extrabold">{`>`}</span>
        </div>
      </div>
    </div>
  )
}
