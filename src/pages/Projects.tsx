import pomodoro from '../assets/pomodoro-image.svg'
import movie from '../assets/movie-image.svg'
import portfolio from '../assets/portfolio-image.svg'
import comingsoon from '../assets/comingsoon-image.svg'
import { BsGithub } from 'react-icons/bs'
import { ArrowCircleLeft, ArrowSquareOut } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'

const portfolioDescription = 'It was built to show to people my projects and let them get in touch easily! Also, I developed this one to improve my react and tailwind skills, introducing a charming UI.'

const pomodoroDescription = 'Project developed for my portfolio. However, it was built with the intention of impacting some student friends, explaining how the method works and bringing a nice interface. I hope it helps in some way!'

const movieDescription = 'MyMDB is a search application that simulates IMDB. You can find any type of movie or series, searching by name, genre, latest releases, etc. It was developed with the objective of deepening my knowledge in react and API consumption!'

export const Projects = () => {

  return (
    <div className='projects min-w-full min-h-full overflow-hidden'>
      <Link to='/' className='flex pt-28 items-center justify-start gap-2 pl-4 md:pl-4 lg:pl-28 xl:pl-24'>
        <button className='p-2 rounded-lg flex items-center justify-center gap-2 text-slate-300 font-semibold text-xl hover:bg-white/5 transition-colors duration2'>
          <ArrowCircleLeft size={28} color="#cbd5e1" weight="fill" />Back
        </button>
      </Link>
      <div className="px-6 lg:px-28 pt-6 grid grid-cols-1 xl:grid-cols-2 items-center justify-between lg:gap-6">
        <m.div 
          initial={{ x: '50vw', opacity: 0}}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col lg:flex-row'
        >
          <h1 className='text-3xl font-main text-slate-300 font-bold lg:hidden'>01. Portfolio</h1>
          <img src={portfolio} alt="" className='lg:w-1/2 lg:h-full w-full'/>
          <div className='w-full h-96 py-4 flex flex-col items-start justify-start gap-16'>
                <h1 className='text-3xl font-main text-slate-300 font-bold hidden lg:block'>01. Portfolio</h1>
            <div className='w-full lg:w-96 flex flex-col justify-between gap-8'>
              <p className='w-full lg:w-96 text-justify text-lg text-slate-300'>{portfolioDescription}</p>
              <div className='flex w-full justify-around'>
                <a href="https://github.com/jotapemattos/portfolio-jotapemattos" target='_blank'><BsGithub size={24} color="#A5B4FC" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
                <a href="https://jotapemattos-portfolio.vercel.app/" target='_blank'><ArrowSquareOut size={26} color="#A5B4FC" weight="fill" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
              </div>
            </div>
          </div>
        </m.div>
        <m.div
          initial={{ x: '50vw', opacity: 0}}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className='flex flex-col lg:flex-row'
        >
          <h1 className='text-3xl font-main text-slate-300 font-bold lg:hidden'>02. Pomodoro App</h1>
          <img src={pomodoro} alt="" className='lg:w-1/2 lg:h-full w-full'/>
          <div className='w-full h-96 py-4 flex flex-col items-start justify-start gap-16'>
                <h1 className='text-3xl font-main text-slate-300 font-bold hidden lg:block'>02. Pomodoro App</h1>
            <div className='w-full lg:w-96 flex flex-col justify-between gap-8'>
              <p className='w-full lg:w-96 text-justify text-lg text-slate-300'>{pomodoroDescription}</p>
              <div className='flex w-full justify-around'>
                <a href="https://github.com/jotapemattos/pomodoro-app" target='_blank'><BsGithub size={24} color="#A5B4FC" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
                <a href="https://pomodoro-app-liart.vercel.app/" target='_blank'><ArrowSquareOut size={26} color="#A5B4FC" weight="fill" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
              </div>
            </div>
          </div>
        </m.div>
        <m.div
          initial={{ x: '50vw', opacity: 0}}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='flex flex-col lg:flex-row'
        >
          <h1 className='text-3xl font-main text-slate-300 font-bold lg:hidden'>03. Movie App</h1>
          <img src={movie} alt="" className='lg:w-1/2 lg:h-full w-full'/>
          <div className='w-full h-96 py-4 flex flex-col items-start justify-start gap-16'>
                <h1 className='text-3xl font-main text-slate-300 font-bold hidden lg:block'>03. Movie App</h1>
            <div className='w-full lg:w-96 flex flex-col justify-between gap-8'>
              <p className='w-full lg:w-96 text-justify text-lg text-slate-300'>{movieDescription}</p>
              <div className='flex w-full justify-around'>
                <a href="https://github.com/jotapemattos/mymdb" target='_blank'><BsGithub size={24} color="#A5B4FC" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
                <a href="https://mymoviedb.vercel.app/" target='_blank'><ArrowSquareOut size={26} color="#A5B4FC" weight="fill" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
              </div>
            </div>
          </div>
        </m.div>
        <m.div
          initial={{ x: '50vw', opacity: 0}}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className='flex flex-col lg:flex-row'
        >
          <h1 className='text-3xl font-main text-slate-300 font-bold lg:hidden'>04. </h1>
          <img src={comingsoon} alt="" className='lg:w-1/2 lg:h-full w-full'/>
          <div className='w-full h-96 py-4 flex flex-col items-start justify-start gap-16'>
                <h1 className='text-3xl font-main text-slate-300 font-bold hidden lg:block'>04. </h1>
            <div className='w-full lg:w-96 flex flex-col justify-between gap-8'>
              <p className='w-full lg:w-96 text-justify text-lg text-slate-300'>{''}</p>
              <div className='flex w-full justify-around'>
                <a href="#" target='_blank'><BsGithub size={24} color="#A5B4FC" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
                <a href="#" target='_blank'><ArrowSquareOut size={26} color="#A5B4FC" weight="fill" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </div>
  )
}
