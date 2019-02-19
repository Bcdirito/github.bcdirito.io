import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <NavLink exact to="/" className="leftLink">Home</NavLink>
        <NavLink exact to="/about" className="leftLink">About</NavLink>
        Brian DiRito - Full Stack Developer
        <NavLink exact to="/projects" className="rightLink">Projects</NavLink>
        <NavLink exact to="/contact" className="rightLink">Contact</NavLink>
      </div>
    )
  }
}
