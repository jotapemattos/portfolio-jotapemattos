import { Envelope, LinkedinLogo } from 'phosphor-react'
import { BsGithub } from 'react-icons/bs'
import { motion as m } from 'framer-motion'

const SocialMedia = () => {
  return (
    <div className="w-full lg:w-right h-full flex justify-end lg:fixed lg:top-0 lg:right-10 xl:right-24">
      <div className="flex lg:flex-col items-center justify-end gap-8">
        <m.a
          initial={{ y: '50vh', opacity: 0}}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }} 
          href="https://github.com/jotapemattos" 
          target='_blank'
        >
          <BsGithub size={24} color="#A5B4FC" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/>
        </m.a>

        <m.a
          initial={{ y: '50vh', opacity: 0}}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }} 
          href="https://www.linkedin.com/in/jo%C3%A3o-pedro-mattos-rodrigues-camargo-23b52a25b/" 
          target='_blank'
        >
          <LinkedinLogo size={26} color="#A5B4FC" weight="fill" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/>
        </m.a>

        <m.a
          initial={{ y: '50vh', opacity: 0}}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1 }} 
          href="mailto:jpmrc49@gmail.com" 
          target='_blank'
        >
          <Envelope size={26} color="#A5B4FC" weight="fill" className="hover:fill-contrast-color hover:-translate-y-1 hover:scale-110 transition-all duration-300"/>
        </m.a>

        <m.div
          initial={{height: '0px', opacity: 0}} 
          animate={{height: '112px', opacity: 1}}
          transition={{ duration: 0.5 }}
          className="w-line hidden lg:flex h-28 bg-indigo-300"
        >
        </m.div>

      </div>
    </div>
  )
}

export default SocialMedia