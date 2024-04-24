import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'

import Features from './less1/Features'

import MyCity from './hw/MyCity/MyCity'
import Theme from './hw/Theme/Theme'
import Comments from './hw/Comments/Comments'
import CounterBtn from './hw/CounterBtn/CounterBtn'
import TextEditor from './hw/TextEditor/TextEditor'

/*import Home from './less2/Home'
import Contact from './less2/Contact'
import About from './less2/About'
import NotFound from './less2/NotFound'
import Price from './less2/Price'
import Navigation from './less2/Navigation'*/

import UserList from './less3/UserList'
import Counter from './less3/Counter'

import CounterClass from './less4/CounterClass'
import Form1 from './less4/Form1'

import About from './less5/pages/About'
import Contact from './less5/pages/Contact'
import Home from './less5/pages/Home'
import Layout from './less5/layout/Layout'
import DetailsProduct from './less5/components/DetailsProduct'
import NotFound from './less5/components/NotFound'
import { ProductProvider } from './less5/context/ProductContext'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProductProvider>
          <Layout />
        </ProductProvider>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/About',
          element: <About />
        },
        {
          path: '/Contact',
          element: <Contact />
        },
        {
          path: '/Product/:id',
          element: <DetailsProduct/>
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ]);
  return (
    <>
      <div>
        <p>Lesson 5</p>
        <RouterProvider router={router} />
      </div>
      <hr/>
    
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
        {/*<Router>
          <Navigation/>
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/Price" element={<Price/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/About" element={<About/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
  </Router>*/}
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
