import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Work from './pages/work'
import Home from './pages/home'
import About from './pages/about'

function App() {
  const works = [
    {
      name: 'Portfolio 02',
      id: "portfolio-02",
      year: "2026",
      color: "#bcd7ff",
      link: "https://github.com/Flow2510/porvenir",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/portfolio02-mockup.png',
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit iste eveniet ut beatae, assumenda itaque quos! Placeat assumenda unde obcaecati, corporis ipsam deserunt sit sint, ex beatae blanditiis expedita!"
    },
    {
      name: 'Spylt Clone',
      id: "spylt",
      year: "2026",
      link: "https://github.com/Flow2510/spylt-clone",
      color: "#e0c488",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/spylt-mockup.png',
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit iste eveniet ut beatae, assumenda itaque quos! Placeat assumenda unde obcaecati, corporis ipsam deserunt sit sint, ex beatae blanditiis expedita!"
    },
    {
      name: 'Porvenir',
      id: "porvenir",
      link: "https://aubergedelporvenir.netlify.app/",
      year: "2026",
      color: "#348d52",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/porvenir-mockup.png',
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit iste eveniet ut beatae, assumenda itaque quos! Placeat assumenda unde obcaecati, corporis ipsam deserunt sit sint, ex beatae blanditiis expedita!"
    },
    {
      name: "Valles'pok",
      id: "vallespok",
      year: "2026",
      color: "#bd3e3e",
      link: "https://github.com/Flow2510/vallespok",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/vallespok-mockup.png',
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit iste eveniet ut beatae, assumenda itaque quos! Placeat assumenda unde obcaecati, corporis ipsam deserunt sit sint, ex beatae blanditiis expedita!"
    },
    {
      name: 'Portfolio',
      id: "portfolio-01",
      year: "2025",
      link: "https://github.com/Flow2510/portfolio2",
      color: "#bda8a8",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/portfolio-mockup.jpeg',
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit iste eveniet ut beatae, assumenda itaque quos! Placeat assumenda unde obcaecati, corporis ipsam deserunt sit sint, ex beatae blanditiis expedita!"
    },    
    {
      name: 'Weather App',
      id: "weather-app",
      year: "2025",
      link: "https://weathernowflow2510.netlify.app/",
      color: "#4750ca",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/weather-mockup.png',
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit iste eveniet ut beatae, assumenda itaque quos! Placeat assumenda unde obcaecati, corporis ipsam deserunt sit sint, ex beatae blanditiis expedita!"
    }
  ]

  return (
    <Routes>
      <Route path='/' element={<Home works={works}/>}/>
      <Route path='/work' element={<Work works={works}/>}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  )
}

export default App
