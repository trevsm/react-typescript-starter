import React from "react"
import { Link } from "react-router-dom"

import "./Navigation.scss"

export default function Navigation() {
  return (
    <header>
      <div className="content">
        <h1>Company Inc.</h1>
        <nav>
          <Link to={process.env.REACT_APP_HOMEPAGE + "/"}>Home</Link>
          <Link to={process.env.REACT_APP_HOMEPAGE + "/about"}>About</Link>
          <Link to={process.env.REACT_APP_HOMEPAGE + "/contact"}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
