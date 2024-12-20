import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Title from './components/Title'
import MainComponent from './components/MainComponent'

function App() {
 

  return (
    <div>
      <Nav/>
      <Title/>
      <MainComponent/>
    </div>
    
  )
}

export default App
