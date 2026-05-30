import { createContext, useState, useEffect } from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './component/Footer'
import ReactGA from 'react-ga'
import './App.css'
import "react-lazy-load-image-component/src/effects/blur.css";

const TRACKING = import.meta.env.VITE_TRACKING_ID
ReactGA.initialize(TRACKING)

export const AppContext = createContext();

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  // navbar toggle
  const [toggle, setToggle] = useState(false)

  const toggleNavbar = () => {
    setToggle(prev => !prev)
  }

  // navigate
  const navigateTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({behavior: 'smooth'})
    }
    setToggle(false)
  }

  return (
    <AppContext.Provider value={{toggle, toggleNavbar, navigateTo}}>
    <main className="pt-4 md:pt-8 lg:pt-14 grid gap-20 lg:gap-28">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </main>
    </AppContext.Provider>




  )
}

export default App
