import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import Header from './components/header/header'
import Menu from './components/menu/menu'
import ProjectPage from './pages/projectpage'
import ScrollToTop from './components/scrolltotop/scrolltotop'
import ProjectsPage from './pages/projectspage'
import AboutPage from './pages/aboutpage'
import Loader from './components/loader/loader'

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    const handleResize = () => {
      if(window.innerWidth > 1024) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }    
  }, [])

  if (isLoading) return <Loader isLoading={isLoading} setIsLoading={setIsLoading} isDesktop={isDesktop}/>

  return (
    <div className='font-[inter]'
      style={{
        background: "#fafafa",
        color: "#131313",
      }}
    >
      <ScrollToTop />
      <Menu
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen} 
      />
      <Header
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
        isDesktop={isDesktop}
      />
      <Routes>
        <Route path='/' element={<HomePage isDesktop={isDesktop}/>}/>
        <Route path='/projects/:id' element={<ProjectPage />}/>
        <Route path='/projects' element={<ProjectsPage />}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
    </div>
  )
}

export default App

// faire un depot git
// verifier css
// choisirs polices, etc
// finir d'animer plus verifications des animations
// finir les textes/img/alts...
// SEO
// optimiser
// mettre en ligne