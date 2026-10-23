import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import HomePage from './pages/homepage'
import Header from './components/header/header'
import Menu from './components/menu/menu'
import ProjectPage from './pages/projectpage'
import ScrollToTop from './components/scrolltotop/scrolltotop'
import ProjectsPage from './pages/projectspage'
import AboutPage from './pages/aboutpage'
import Loader from './components/loader/loader'
import ContactModal from './components/contactmodal/contactmodal'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false)

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateWithTransition = (path: string) => {
    if (isTransitioning || pathname === path) return;

    setIsTransitioning(true);

    setTimeout(() => {
      void navigate(path);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, 1000);
  };

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

  useGSAP(() => [
    gsap.fromTo('.animated-item', {
      y: 50,
      opacity: 0,
    },{
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.6,
      stagger: 0.1
    })
  ], {dependencies: [pathname]})

  return (
    <div className='font-[inter] bg-neutral-50 text-neutral-950'
    >
      <Loader isLoading={isLoading} setIsLoading={setIsLoading} isTransitioning={isTransitioning}/>
      <ScrollToTop />
      <Menu
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen} 
        contactModalIsOpen={contactModalIsOpen}
        setContactModalIsOpen={setContactModalIsOpen}
      />
      <ContactModal
        setMenuIsOpen={setMenuIsOpen} 
        navigateWithTransition={navigateWithTransition}
        contactModalIsOpen={contactModalIsOpen}
        setContactModalIsOpen={setContactModalIsOpen}
      />
      <Header
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
        isDesktop={isDesktop}
        contactModalIsOpen={contactModalIsOpen}
        setContactModalIsOpen={setContactModalIsOpen}
        navigateWithTransition={navigateWithTransition}
      />
      <Routes>
        <Route path='/' element={<HomePage isDesktop={isDesktop} navigateWithTransition={navigateWithTransition} />}/>
        <Route path='/projects/:id' element={<ProjectPage navigateWithTransition={navigateWithTransition}/>}/>
        <Route path='/projects' element={<ProjectsPage navigateWithTransition={navigateWithTransition}/>}/>
        <Route path='/about' element={<AboutPage contactModalIsOpen={contactModalIsOpen} setContactModalIsOpen={setContactModalIsOpen} navigateWithTransition={navigateWithTransition}/>}/>
      </Routes>
    </div>
  )
}

export default App

// mettre plusieurs sources d'images de tailles differentes
// faire une page privacy policy