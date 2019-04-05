import React, { Component } from 'react'
import headshot from "../media/photos/website_headshot.jpg"
import "../css/home.css"
import "../css/menu.css"

class Home extends Component {
  render() {
    return (
        <div className="homeContent">
          <h1>Brian DiRito - Full Stack Developer</h1>
            <img className="headshot" src={headshot} alt="headshot" />
              <div className="homeText">
                <h3>Welcome!</h3>
                <p>My name is Brian DiRito, and I'm a Full Stack Developer. I'm so happy you're here! Since you're visiting, please feel free to take a look around! Thanks for stopping by!</p>
              </div>
        </div>
    )
  }
}

export default Home
