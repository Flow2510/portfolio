import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Work from './pages/work'
import Home from './pages/home'

function App() {
      const works = [
        {
            name: 'test 1',
            id: "1",
            color: 'brown',
            tags: ["Frontend", "REACT"],
            image: '/src/assets/images/3d-rendering-laptop-desert.jpg',
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit iste eveniet ut beatae, assumenda itaque quos! Placeat assumenda unde obcaecati, corporis ipsam deserunt sit sint, ex beatae blanditiis expedita!"
        },
        {
            name: 'test 2',
            id: "2",
            color: 'black',
            tags: ["Frontend", "REACT"],
            image: '/src/assets/images/3d-rendering-laptop-jungle.jpg',
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit iste eveniet ut beatae, assumenda itaque quos! Placeat assumenda unde obcaecati, corporis ipsam deserunt sit sint, ex beatae blanditiis expedita!"
        },
        {
            name: 'test 3',
            id: "3",
            color: 'purple',
            tags: ["Frontend", "REACT"],
            image: '/src/assets/images/v690-sasi-41a.jpg',
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
