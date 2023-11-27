import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './components/Layouts';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

const App = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layouts/>}>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App