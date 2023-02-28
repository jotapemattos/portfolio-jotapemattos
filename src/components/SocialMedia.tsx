import { Envelope, LinkedinLogo } from 'phosphor-react'
import { BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className="w-right h-full flex justify-end sticky top-0 left-0 right-0 z-10">
      <div className="flex flex-col items-center justify-end gap-8">
        <a href="https://github.com/jotapemattos" target='_blank'>
          <BsGithub size={24} color="#A5B4FC" className="hover:fill-contrast-color"/>
        </a>
        <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-mattos-rodrigues-camargo-23b52a25b/" target='_blank'>
          <LinkedinLogo size={26} color="#A5B4FC" weight="fill" className="hover:fill-contrast-color"/>
        </a>
        <a href="mailto:jpmrc49@gmail.com" target='_blank'>
          <Envelope size={26} color="#A5B4FC" weight="fill" className="hover:fill-contrast-color"/>
        </a>
        <div className="w-line h-28 bg-indigo-300"></div>
      </div>
    </div>
  )
}

export default SocialMedia