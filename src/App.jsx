import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Work from './pages/work'
import Home from './pages/home'

function App() {
  const works = [
    {
      name: 'Portfolio 02',
      id: "portfolio-02",
      year: "2026",
      color: "#ffffff",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/portfolio02-mockup.png',
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit iste eveniet ut beatae, assumenda itaque quos! Placeat assumenda unde obcaecati, corporis ipsam deserunt sit sint, ex beatae blanditiis expedita!"
    },
    {
      name: 'Portfolio',
      id: "portfolio-01",
      year: "2026",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/portfolio-mockup.jpeg',
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit iste eveniet ut beatae, assumenda itaque quos! Placeat assumenda unde obcaecati, corporis ipsam deserunt sit sint, ex beatae blanditiis expedita!"
    },
    {
      name: 'Porvenir',
      id: "porvenir",
      link: "https://github.com/Flow2510/porvenir",
      year: "2026",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/porvenir-mockup.png',
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit iste eveniet ut beatae, assumenda itaque quos! Placeat assumenda unde obcaecati, corporis ipsam deserunt sit sint, ex beatae blanditiis expedita!"
    },
    {
      name: 'Weather App',
      id: "weather-app",
      year: "2025",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/weather-mockup.png',
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit iste eveniet ut beatae, assumenda itaque quos! Placeat assumenda unde obcaecati, corporis ipsam deserunt sit sint, ex beatae blanditiis expedita!"
    }
  ]

  return (
    <Routes>
      <Route path='/' element={<Home works={works}/>}/>
      <Route path='/work' element={<Work works={works}/>}/>
    </Routes>
  )
}

export default App
