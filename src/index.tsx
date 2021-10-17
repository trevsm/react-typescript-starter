import React from "react"
import { render } from "react-dom"
import App from "./components/App"

const Index = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

render(<Index />, document.querySelector("#entry"))
