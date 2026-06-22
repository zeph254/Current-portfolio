import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home'
import Certifications from'./pages/Certifications.jsx'
import Experience from "./pages/Experience.jsx";
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/Experience" element={<Experience/>}/>
          <Route path="/Certifications" element={<Certifications/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/NotFound" element={<NotFound/>}/>
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
