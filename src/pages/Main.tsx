import React from 'react'
import { CurrentProject } from '../components/CurrentProject'
import HomeContent from '../components/HomeContent'

const Main = () => {
  return (
    <div className="h-screen min-h-screen w-full mt-12 py-10 flex flex-col items-center justify-between bg-main-color">
      <HomeContent/>
      <CurrentProject/>
    </div>
  )
}

export default Main