import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
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
