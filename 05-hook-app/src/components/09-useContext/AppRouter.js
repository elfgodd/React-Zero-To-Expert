import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import AboutScreen from './AboutScreen'
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomeScreen />} />
        <Route exact path='about' element={<AboutScreen />} />
        <Route exact path='login' element={<LoginScreen />} />
        <Route path='*' element={<HomeScreen />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
