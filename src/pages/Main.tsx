import React from 'react'
import { CurrentProject } from '../components/CurrentProject'
import HomeContent from '../components/HomeContent'

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-main h-main min-w-screen gap-4">
      <HomeContent/>
      <CurrentProject/>
    </div>
  )
}

export default Main