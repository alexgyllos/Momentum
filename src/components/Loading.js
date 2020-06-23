import React from "react"
import logo from '../assets/GradientSpinner.png'
import '../App.css'

export default function({ name, target }) {
  if (!target) {
    return <div className="App-logo-div">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="App-logo-text">loading...please be patient...</h2>
    </div>
  }
  if (target instanceof Error) {
    return (
      <>
        <p className="landingPage">{`There was an error while loading ${name}`}</p>
        <font color="red">{target.message}</font>
      </>
    )
  }
  return <></>
}
