import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import "./Styles/App.css"
import FrontierAIResearch from './Components/FrontierAIResearch'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <FrontierAIResearch />
    </div>
  )
}

export default App
