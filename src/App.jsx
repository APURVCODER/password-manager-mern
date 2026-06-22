import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PassList from './assets/components/PassList'
import Manager from './assets/components/Manager'
import Navbar from './assets/components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Manager/>
    
    </>
  )
}

export default App
