import React from "react"
import "./Heading.scss"

export default function Heading({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="heading">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}
