
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-[calc(100vh-68px)]'>
        <Home/>
      </div>
      <Footer />
    </>
  )
}

export default App
