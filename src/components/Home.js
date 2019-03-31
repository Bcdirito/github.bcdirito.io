import React, { Component } from 'react'
import headshot from "../media/website_headshot.jpg"

class Home extends Component {
  render() {
    return (
      <div className="homeContent">
        <img className="headshot" src={headshot} alt="headshot" />
        <div className="homeText">
          <h3>Welcome!</h3>
          <p>My name is Brian DiRito, and I'm a Full Stack Developer. I'm so happy you're here! Since you're visiting, please feel free to take a look around!</p>
        </div>
      </div>
    )
  }
}

export default Home
