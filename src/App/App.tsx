import React from "react"
import { Routes, Route } from "react-router-dom"
import { Navigation } from "../Components"
import Footer from "../Components/Footer/Footer"
import { Home, About, Contact } from "../Pages"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
