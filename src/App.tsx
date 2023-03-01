import { useState } from 'react'
import Header from './components/Header'
import MobileList from './components/MobileList'
import Main from './pages/Main'
import './styles/index.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div id='home' className='bg-main-color min-w-screen min-h-screen h-screen'>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      {isOpen && (
        <MobileList isOpen={isOpen}/>
      )}
      <Main/>
    </div>
  )
}

export default App
