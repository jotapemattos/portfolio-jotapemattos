import pomodoro from '../assets/pomodoro-image.svg'
import { ArrowSquareOut } from "phosphor-react"
import { BsGithub } from "react-icons/bs"

export const CurrentProject = () => {
  return (
    <div id="projects" className="projects-page min-h-full w-full flex justify-center">
      <div className="w-4/5 flex flex-col items-center justify-between p-4 gap-10">
        <div className="flex w-full items-center justify-start">
          <span className="text-3xl text-slate-300 text-center font-poppins font-extrabold">{`<`}</span>
          <h1 className="text-3xl text-slate-300 text-center font-poppins font-extrabold">projects</h1>
          <span className="text-3xl text-slate-300 text-center font-poppins font-extrabold">{`>`}</span>
        </div>
        <div className="w-project h-4/5 flex flex-col items-center justify-center bg-white">
          
        </div>
        <div className="flex w-4/5 justify-center w-project">
          <div className="w-full flex justify-end">
            <button className="flex items-center gap-2 text-md py-2 px-8 text-contrast-color border border-contrast-color rounded-sm p-2 hover:bg-contrast-color/20 transition-colors duration-200">
              More projects 
              <ArrowSquareOut size={20} color="#03fcb1" weight="fill" />
            </button>
          </div>
        </div>
        <div className="flex w-full items-start justify-start">
          <span className="text-3xl text-slate-300 text-center font-poppins font-extrabold">{`</`}</span>
          <h1 className="text-3xl text-slate-300 text-center font-poppins font-extrabold">projects</h1>
          <span className="text-3xl text-slate-300 text-center font-poppins font-extrabold">{`>`}</span>
        </div>
      </div>
    </div>
  )
}
