import pomodoro from '../assets/pomodoro-image.svg'
import movie from '../assets/movie-image.svg'
import { ArrowSquareOut } from "phosphor-react"
import { BsGithub } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { motion as m, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const pomodoroDescription = 'Project developed for my portfolio. However, it was built with the intention of impacting some student friends, explaining how the method works and bringing a nice interface. I hope it helps in some way!'
const movieDescription = 'MyMDB is a search application that simulates IMDB. You can find any type of movie or series, searching by name, genre, latest releases, etc. It was developed with the objective of deepening my knowledge in react and API consumption!'

export const CurrentProject = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const {ref, inView} = useInView({threshold: 0.05})
  const firstAnimation = useAnimation()
  const secondAnimation = useAnimation()

  useEffect(() => {
    if(inView){
      firstAnimation.start({
        x: 0,
        transition: {duration: 0.9}
      })
      secondAnimation.start({
        x: 0,
        transition: {duration: 1.1}
      })
    }
    if(!inView){
      firstAnimation.start({x: '-100vw'})
      secondAnimation.start({x: '-100vw'})
    }
  }, [inView])

  return (
    <div id="projects" className="projects-page min-h-full h-2-screen md:h-[1400px] lg:h-full lg:min-h-full w-full flex justify-center">
      <div className="w-full md:w-4/5 max-[375px]:h-full max-[390px]:h-full max-[414px]:h-4/5 lg:h-full flex flex-col items-center lg:items-start xl:items-center justify-between p-4 gap-10">

        <div className="flex w-full items-center justify-start md:pl-10">
          <span className="text-3xl text-slate-300 text-center font-main font-extrabold">{`<`}</span>
          <h1 className="text-3xl text-slate-300 text-center font-main font-extrabold">projects</h1>
          <span className="text-3xl text-slate-300 text-center font-main font-extrabold">{`>`}</span>
        </div>

        <div ref={ref} className="w-full md:w-4/5 h-full flex flex-col md:flex-col sm:flex-row items-start justify-between md:justify-center mt-10 gap-10 md:gap-20 lg:gap-0">
          <m.div
            animate={firstAnimation} 
            className='h-[500px] lg:h-1/2 w-full flex flex-col lg:flex-row items-start justify-start lg:ml-6'
          >
            <h1 className='text-2xl lg:text-3xl font-main text-slate-300 font-bold lg:hidden'>01. Pomodoro App</h1>
            <img src={pomodoro} alt="" className='lg:w-1/2 lg:h-full w-full'/>
            <div className='w-full h-96 py-4 flex flex-col items-start justify-start gap-20'>
              <h1 className='text-3xl font-main text-slate-300 font-bold hidden lg:block'>01. Pomodoro App</h1>
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
            animate={secondAnimation}
            className='h-[500px] lg:h-1/2 w-full flex flex-col lg:flex-row items-start justify-start lg:ml-6'
          >
            <h1 className='text-3xl font-main text-slate-300 font-bold lg:hidden'>02. Movie App</h1>
            <img src={movie} alt="" className='lg:w-1/2 lg:h-full w-full'/>
            <div className='w-full h-96 py-4 flex flex-col items-start justify-start gap-20'>
              <h1 className='text-3xl font-main text-slate-300 font-bold hidden lg:block'>02. Movie App</h1>
              <div className='w-full lg:w-96 flex flex-col justify-between gap-8'>
                <p className='w-full lg:w-96 text-justify text-lg text-slate-300'>{movieDescription}</p>
                <div className='flex w-full justify-around'>
                  <a href="https://github.com/jotapemattos/mymdb" target='_blank'><BsGithub size={24} color="#A5B4FC" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
                  <a href="https://mymoviedb.vercel.app/" target='_blank'><ArrowSquareOut size={26} color="#A5B4FC" weight="fill" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/></a>
                </div>
              </div>
            </div>
          </m.div>
        </div>
        <div className="flex w-full xl:w-4/5 justify-center xl:mr-10 md:pt-10 lg:pt-0">
          <div className="w-full flex justify-center xl:justify-end">
            <Link preventScrollReset={true} to='/moreprojects'>
              <button onClick={scrollToTop} className="flex items-center gap-2 text-md py-2 px-8 text-contrast-color border border-contrast-color rounded-sm p-2 hover:bg-contrast-color/20 transition-colors duration-200">
                More projects 
                <ArrowSquareOut size={20} color="#03fcb1" weight="fill" />
              </button>
            </Link>
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