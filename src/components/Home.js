import React, { Component } from 'react'
import headshot from "../media/website_headshot.jpg"
import "../css/home.css"
import "../css/menu.css"

class Home extends Component {
  render() {
    return (<div>
      <h1>Brian DiRito - Full Stack Developer</h1>
        <div className="homeContent">
          <img className="headshot" src={headshot} alt="headshot" />
          <div className="homeText">
            <h3>Welcome!</h3>
            <p>My name is Brian DiRito, and I'm a Full Stack Developer. I'm so happy you're here! Since you're visiting, please feel free to take a look around!</p>
            <br/>
            You can check out my Github <a href="https://github.com/Bcdirito" target="_blank" rel="noopener noreferrer">here</a>
            <br/>
            <br/>
            or
            <br/>
            <br/>
            Check out my LinkedIn <a href="https://www.linkedin.com/in/brian-dirito-7a7174145/" target="_blank" rel="noopener noreferrer">here</a>
            <br/>
            <br/>
            <br/>
            Thanks for stopping by!
          </div>
        </div>
      </div>
    )
  }
}

export default Home
