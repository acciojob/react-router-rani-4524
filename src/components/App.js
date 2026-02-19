
import React from "react";
import './../styles/App.css';
import Home from './Home'
import About from './About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'

const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </BrowserRouter>
   
  )
}

export default App
