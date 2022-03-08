import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutScreen from './AboutScreen'
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomeScreen />} />
        <Route exact path='about' element={<AboutScreen />} />
        <Route exact path='login' element={<LoginScreen />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
