
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
