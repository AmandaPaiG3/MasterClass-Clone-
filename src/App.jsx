import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Header.css'
import Header from './Header'
import Hero from './Hero'
import Anchors from './Anchors'
import Classinfo from './Classinfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Header />
        <Hero />
        
        <Classinfo />
      </div>
      
    
  )
}

export default App
