import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/homepage'
import Header from './components/header/header'
import Menu from './components/menu/menu'
import ProjectPage from './pages/projectpage'
import ScrollToTop from './components/scrolltotop/scrolltotop'
import ProjectsPage from './pages/projectspage'
import AboutPage from './pages/aboutpage'
import Loader from './components/loader/loader'
import ContactModal from './components/contactmodal/contactmodal'

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(()=> {
    const handleResize = () => {
      if(window.innerWidth > 1024) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }    
  }, [])

  useEffect(() => {
      if (pathname !== "/") {
          setIsLoading(false)
      }
  }, [pathname])

  if (isLoading && location.pathname === '/') return <Loader isLoading={isLoading} setIsLoading={setIsLoading} isDesktop={isDesktop}/>

  return (
    <div className='font-[inter] bg-neutral-50 text-neutral-950'
    >
      <ScrollToTop />
      <Menu
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen} 
        contactModalIsOpen={contactModalIsOpen}
        setContactModalIsOpen={setContactModalIsOpen}
      />
      <ContactModal
        contactModalIsOpen={contactModalIsOpen}
        setContactModalIsOpen={setContactModalIsOpen}
      />
      <Header
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
        isDesktop={isDesktop}
        contactModalIsOpen={contactModalIsOpen}
        setContactModalIsOpen={setContactModalIsOpen}
      />
      <Routes>
        <Route path='/' element={<HomePage isDesktop={isDesktop} />}/>
        <Route path='/projects/:id' element={<ProjectPage />}/>
        <Route path='/projects' element={<ProjectsPage />}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
    </div>
  )
}

export default App

// mettre plusieurs sources d'images de tailles differentes
// finir une modal contact, faire transitions entre les pages