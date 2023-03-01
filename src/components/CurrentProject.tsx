import { ArrowSquareOut } from "phosphor-react"
import { BsGithub } from "react-icons/bs"

export const CurrentProject = () => {
  return (
    <div className="min-h-full h-full w-full bg-main-color flex justify-center">
      <div id="projects" className="w-4/5 flex flex-col items-center justify-between p-10">
        <div className="flex w-full items-center justify-center gap-4">
          <span className="w-1/4 h-line bg-indigo-300"></span>
          <h1 className="text-3xl text-indigo-300 text-center font-poppins font-extrabold">Latest project i've been worked</h1>
          <span className="w-1/4 h-line bg-indigo-300"></span>
        </div>
        <div className="w-3/4 h-4/5 flex justify-center items-center cursor-pointer">
          <div className="w-4/5 h-4/5 flex flex-col justify-center items-center relative bg-gradient-to-br from-white/10 to-white/5 backdrop-opacity-80 backdrop-blur-sm shadow-xl rounded-lg">
            <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center z-20">
                <h4 className="text-contrast-color text-xl font-bold font-poppins">Credit Card</h4>
                <img src="/project-image.svg" alt="project-image" className="w-4/5 h-4/5"/>
                <div className="flex w-4/5 justify-evenly items-center">
                  <a href="https://github.com/jotapemattos/pomodoro-app" className="flex items-center justify-center gap-2">
                    Github 
                    <BsGithub size={24} color="#A5B4FC" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/>
                  </a>
                  <a href="https://pomodoro-app-liart.vercel.app/" className="flex items-center justify-center gap-2">
                    Live Site 
                    <ArrowSquareOut size={20} color="#faf1a0" weight="fill" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/>
                  </a>
                </div>
            </div>
            {/* <div className="absolute inset-0 bg-white/5 w-4/5 h-4/5 flex flex-col justify-around items-center z-10">
              <h4 className="text-contrast-color text-xl font-bold font-poppins">Credit Card</h4>
              <p>Project developed for my portfolio. However, it was built with the intention of impacting some student friends, explaining how the method works and bringing a nice interface. I hope it helps in some way!</p>
              <p>React Typescript | Tailwind | Node e NPM | Vite</p>
            </div> */}
          </div>
        </div>
        <div className="flex justify-center w-4/5">
          <div className="w-3/4 flex justify-end">
            <button className="flex items-center gap-2 text-md font-poppins text-contrast-color border border-contrast-color rounded-md p-2 hover:bg-contrast-color/20 transition-colors duration-200">
              More projects 
              <ArrowSquareOut size={20} color="#faf1a0" weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
