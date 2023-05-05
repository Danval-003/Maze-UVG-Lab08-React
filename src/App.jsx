import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from './pages/StartPage/StartPage'
import LabyrinthPage from './pages/LabyrinthPage/LabyrinthPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/LP' element={<LabyrinthPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
