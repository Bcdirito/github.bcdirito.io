import React, { Component } from 'react'
import headshot from "../media/website_headshot.jpg"

export default class Home extends Component {
  render() {
    return (
      <div>
        <img className="headshot" src={headshot} alt="headshot" />
        <p>This is the home page. Where people will land first.</p>
      </div>
    )
  }
}
