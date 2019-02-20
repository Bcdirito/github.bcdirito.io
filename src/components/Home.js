import React, { Component } from 'react'
import headshot from "../media/website_headshot.jpg"

class Home extends Component {
  render() {
    return (
      <div>
        <img className="headshot" src={headshot} alt="headshot" />
        <div className="homeText">
        <h3>Welcome!</h3>
        <p>I'm so happy you're here! Take a look around!</p>
        </div>
      </div>
    )
  }
}

export default Home
