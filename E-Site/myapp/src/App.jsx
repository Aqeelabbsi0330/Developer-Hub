import { useState } from 'react'
import Header from './Components/Header/Header'
import Button from './Components/Button/Button'
import Navigation from './Components/Navigation/Navigation'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
    </>
  )
}

export default App
