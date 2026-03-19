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
      link: "https://github.com/Flow2510/",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/portfolio02-mockup.png',
      text: "Nouveau portfolio développé pour présenter mes projets récents avec une interface plus moderne et des animations plus abouties.",
      text2: "Ce projet m’a permis d’améliorer la structure du code, le responsive et l’expérience utilisateur."
    },
    {
      name: 'Porvenir',
      id: "porvenir",
      link: "https://aubergedelporvenir.netlify.app/",
      year: "2026",
      color: "#348d52",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/porvenir-mockup.png',
      text: "Ce projet consiste en la création du site web d’une auberge située en Colombie, entre nature et proximité de la ville.",
      text2: "J’ai conçu un site clair et immersif, pensé pour présenter le lieu, améliorer la visibilité de l’auberge et faciliter la réservation via ses partenaires."
    },
    {
      name: 'Spylt Clone',
      id: "spylt",
      year: "2026",
      link: "https://github.com/Flow2510/spylt-clone",
      color: "#e0c488",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/spylt-mockup.png',
      text: "Reproduction du site de Splyt dans le cadre d’un projet personnel.",
      text2: "L’objectif était de recréer fidèlement le design et les animations tout en travaillant la structure du code, le responsive et les performances."
    },
    {
      name: "Valles'pok",
      id: "vallespok",
      year: "2026",
      color: "#bd3e3e",
      link: "https://github.com/Flow2510/vallespok",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/vallespok-mockup.png',
      text: "Réalisation du site web d’une association de poker afin de présenter l’association, ses événements et ses informations principales.",
      text2: "L’objectif était de créer un site clair, moderne et accessible pour les membres et les nouveaux joueurs."
    },
    {
      name: 'Portfolio',
      id: "portfolio-01",
      year: "2025",
      link: "https://github.com/Flow2510/portfolio2",
      color: "#bda8a8",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/portfolio-mockup.jpeg',
      text: "Création de mon premier portfolio afin de présenter mes premiers projets et apprendre à structurer un site web complet.",
      text2: "Ce projet m’a permis de travailler le responsive, la mise en page et l’organisation du code."
    },    
    {
      name: 'Weather App',
      id: "weather-app",
      year: "2025",
      link: "https://weathernowflow2510.netlify.app/",
      color: "#4750ca",
      tags: ["Frontend", "REACT"],
      image: '/src/assets/images/weather-mockup.png',
      text: "Réalisation d’une application météo dans le cadre d’un challenge Frontend Mentor.",
      text2: "Le projet consistait à créer une interface responsive permettant d’afficher les données météo d’une ville de manière claire et intuitive."
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
