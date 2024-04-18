import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Features from './less1/Features'
import MyCity from './hw/MyCity'
import Home from './less2/Home'
import Price from './less2/Price'
import Contact from './less2/Contact'
import About from './less2/About'
import NotFound from './less2/NotFound'
import Navigation from './less2/Navigation'

function App() {
  return (
    <>
      <div>
        <p>Lesson 2</p>
        <Router>
          <Navigation/>
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/Price" element={<Price/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/About" element={<About/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Router>
      </div>
      <hr/>
      
      <div>
        <p>Lesson 1</p>
        <Features />
      </div>
      <hr/>

      <div>
        <p>HW 1</p>
        <MyCity />
      </div>
    </>
  )
}

export default App
