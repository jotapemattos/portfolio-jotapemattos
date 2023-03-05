import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CurrentProject } from './components/CurrentProject'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeContent from './components/HomeContent'
import { AnimatePresence } from 'framer-motion'
import './styles/index.css'
import { Projects } from './pages/Projects'
import Home from './pages/Home'

function App() {

  return (
    <div id='home' className='main-content min-w-screen min-h-screen h-screen '>
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/moreprojects' element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
