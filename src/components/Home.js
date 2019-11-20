import React, { Component } from 'react'
import headshot from "../media/photos/website_headshot.jpg"
import githubIcon from "../media/icons/github_icon.png"
import linkedInIcon from "../media/icons/linkedin_icon.png"
import mediumIcon from "../media/icons/medium_icon.png"
import metIcon from "../media/icons/met_icon.png"

import "../css/home.css"
import "../css/menu.css"

export default class Home extends Component {

  state = {
    link: "",
    message: ""
  }

  enterHandler = e => {
    this.setState({
      link: e.target.name,
      message: e.target.attributes.message.value
    })
  }

  leaveHandler = () => {
    this.setState({
      link: "",
      message: ""
    })
  }

  render() {
    return (
        <div className="homePage">
          <h1>{window.screen.width >= 768 ? "Brian DiRito - Full Stack Developer" : null}
          {window.screen.width < 768 && window.screen.width >= 640 ? "Brian DiRito - Developer" : null}
          {window.screen.width < 640 ? "Home" : null}
          </h1>
            <div className="homeContent">
              <img className="headshot" src={headshot} alt="headshot" />
                <div className="homeText">
                  <h3>Welcome!</h3>
                  <p>My name is Brian DiRito, and I'm a Full Stack Developer. I'm so happy you're here! Since you're visiting, please feel free to take a look around! Thanks for stopping by!</p>
                </div>
                <div className="homeIcons">
                  <a href="https://github.com/Bcdirito" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="githubIcon" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} message="Click here to check out my GitHub and repos!" name="github"/></a> <a href="https://www.linkedin.com/in/brian-dirito-7a7174145/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="linkedInIcon" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} message="Click here to check out my LinkedIn profile!" name="linkedIn"/></a> <a href="https://medium.com/@bdirito91" target="_blank" rel="noopener noreferrer"><img src={mediumIcon} alt="mediumIcon" message="Click here to check out my Medium articles!" name="medium" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()}/></a> {!navigator.userAgent.includes("Mobile") ? <a href="https://virtual-met-front.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src={metIcon} alt="metIcon" message="Click here to explore my Virtual Met app!" name="met" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a> : null}
                  <br/>
                  <p>{this.state.link !== "" && !navigator.userAgent.includes("Mobile") ? this.state.message : null}</p>
                </div>
            </div>
        </div>
    )
  }
}