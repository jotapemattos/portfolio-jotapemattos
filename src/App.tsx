import { useState } from 'react'
import Header from './components/Header'
import MobileList from './components/MobileList'
import Main from './pages/Main'
import './styles/index.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-main-color w-screen h-screen z-0'>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      {isOpen && (
        <MobileList isOpen={isOpen}/>
      )}
      <Main/>
    </div>
  )
}

export default App
