import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Features from './less1/Features'
import MyCity from './hw/MyCity/MyCity'
import Theme from './hw/Theme/Theme'
import Comments from './hw/Comments/Comments'
import CounterBtn from './hw/CounterBtn/CounterBtn'
import TextEditor from './hw/TextEditor/TextEditor'
import Home from './less2/Home'
import Price from './less2/Price'
import Contact from './less2/Contact'
import About from './less2/About'
import NotFound from './less2/NotFound'
import Navigation from './less2/Navigation'
import UserList from './less3/UserList'
import Counter from './less3/Counter'
import CounterClass from './less4/CounterClass'
import Form1 from './less4/Form1'

function App() {
  return (
    <>
      <div>
        <p>HW 3</p>
        <Comments/>
        <CounterBtn/>
      </div>
      <hr/>

      <div>
        <p>Lesson 4</p>
        <CounterClass/>
        <Form1/>
      </div>
      <hr/>

      <div>
        <p>HW 2</p>
        <TextEditor/>
        <Theme/>
      </div>
      <hr/>

      <div>
        <p>Lesson 3</p>
        <UserList/>
        <Counter/>
      </div>
      <hr/>
      
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
