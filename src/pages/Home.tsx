import { CurrentProject } from '../components/CurrentProject'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'

const Home = () => {
  return (
    <div className='home min-h-full h-full min-w-full w-full'>
      <HomeContent/>
      <CurrentProject/>
      <Footer/>
    </div>
  )
}

export default Home