import React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App/App"

import "minireset.css"
import "./index.scss"

const Index = () => {
  return (
    <React.StrictMode>
      <BrowserRouter basename="/react-typescript-starter">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}

render(<Index />, document.querySelector("#entry"))
