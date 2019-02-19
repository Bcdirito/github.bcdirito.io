import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/about">About</NavLink>
        Brian DiRito - Full Stack Developer
        <NavLink exact to="/projects">Projects</NavLink>
        <NavLink exact to="/contact">Contact</NavLink>
      </div>
    )
  }
}
