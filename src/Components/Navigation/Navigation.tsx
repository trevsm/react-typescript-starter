import React from "react"
import { Link } from "react-router-dom"

import "./Navigation.scss"

export default function Navigation() {
  return (
    <header>
      <div className="content">
        <h1>Company Inc.</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
