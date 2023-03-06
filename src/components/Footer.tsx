import { ArrowCircleUp } from 'phosphor-react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <div id='contact' className='footer min-h-footer max-[320px]:h-5/6 max-[375px]:h-full lg:h-1200px xl:h-3/4 w-full flex items-center justify-center'>
      <div className='w-4/5 h-full flex flex-col items-center justify-between max-[320px]:pt-10 max-[375px]:pt-20 md:pt-10 lg:pt-96 xl:pt-44 text-slate-300 gap-20'>
        <div className='flex flex-col items-center justify-center gap-8 max-[375px]:pt-10'>
          <h1 className="text-4xl text-center font-poppins font-extrabold">Get in touch</h1>
          <p className='w-3/4 text-center text-base font-poppins'>If you're interested in working with me, feel free to contact by clicking on the button below.</p>
          <button className="border border-contrast-color py-2 px-8 rounded-sm text-base text-contrast-color cursor-pointer hover:bg-contrast-color/20 transition-colors duration-200">
            <a href="https://api.whatsapp.com/send?phone=5511975845050" target="_blank">Contact me</a>
          </button>
        </div>
        <a href="#home"><ArrowCircleUp size={32} color="#A5B4FC" weight="fill" className="lg:hover:fill-contrast-color animate-bounce cursor-pointer transition-colors duration-200"/></a>
        <div className='flex lg:hidden'>
          <SocialMedia/>
        </div>
        <div className='flex h-auto items-center pb-2 lg:pb-8 text-center font-main'>
          <p>Built with <a href="https://reactjs.org/" className='hover:text-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300'>React</a> and <a href="https://tailwindcss.com/" className='hover:text-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300'>Tailwind</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer