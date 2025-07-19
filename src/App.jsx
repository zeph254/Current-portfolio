import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
