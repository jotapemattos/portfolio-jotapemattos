import { CurrentProject } from '../components/CurrentProject'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'

const Main = () => {
  return (
    <div className="main h-screen min-h-screen w-full mt-12 py-10 flex flex-col items-center justify-between">
      <HomeContent/>
      <CurrentProject/>
      <Footer/>
    </div>
  )
}

export default Main