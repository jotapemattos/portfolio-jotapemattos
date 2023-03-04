import { AnimatePresence } from 'framer-motion'
import { CurrentProject } from './components/CurrentProject'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeContent from './components/HomeContent'
import './styles/index.css'

function App() {

  return (
    <div id='home' className='main-content min-w-screen min-h-screen h-screen'>
      <Header/>
      <AnimatePresence initial={false}>
        <HomeContent/>
        <CurrentProject/>
        <Footer/>
      </AnimatePresence>
    </div>
  )
}

export default App
