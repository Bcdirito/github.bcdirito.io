import React, { Component } from 'react'
import headshot from "../media/photos/website_headshot.jpg"
import githubIcon from "../media/icons/github_icon.png"
import linkedInIcon from "../media/icons/linkedin_icon.png"
import mediumIcon from "../media/icons/medium_icon.png"
import metIcon from "../media/icons/met_icon.png"

import "../css/home.css"
import "../css/menu.css"

class Home extends Component {
  
  state = {
    link: ""
  }

  clickHandler = () => {
    if (this.state.link === "github") window.open("https://github.com/Bcdirito")
    else if (this.state.link === "linkedIn") window.open("https://www.linkedin.com/in/brian-dirito-7a7174145/")
    else if (this.state.link === "medium") window.open("https://medium.com/@bdirito91")
    else if (this.state.link === "met") window.open("https://virtual-met-front.herokuapp.com")
  }

  hoverHandler = e => {
    this.setState({link: e.target.name})
  }

  leaveHandler = () => {
    this.setState({link: ""})
  }

  renderLinkMessage = () => {
    if (this.state.link === "github") return "Click here to check out my GitHub and repos!"
    else if (this.state.link === "linkedIn") return "Click here to check out my LinkedIn profile!"
    else if (this.state.link === "medium") return "Click here to check out my Medium articles!"
    else if (this.state.link === "met") return "Click here to explore my Virtual Met app!"
  }



  render() {
    return (
        <div>
          <h1>Brian DiRito - Full Stack Developer</h1>
            <div className="homeContent">
              <img className="headshot" src={headshot} alt="headshot" />
                <div className="homeText">
                  <h3>Welcome!</h3>
                  <p>My name is Brian DiRito, and I'm a Full Stack Developer. I'm so happy you're here! Since you're visiting, please feel free to take a look around! Thanks for stopping by!</p>
                </div>
                <div className="icons">
                  <img src={githubIcon} alt="githubIcon" onMouseEnter={e => this.hoverHandler(e)} onMouseLeave={() => this.leaveHandler()} onClick={() => this.clickHandler()} name="github"/> <img src={linkedInIcon} alt="linkedInIcon" onMouseEnter={e => this.hoverHandler(e)} onMouseLeave={() => this.leaveHandler()} onClick={e => this.clickHandler(e)} name="linkedIn"/> <img src={mediumIcon} alt="mediumIcon" name="medium" onMouseEnter={e => this.hoverHandler(e)} onMouseLeave={() => this.leaveHandler()} onClick={e => this.clickHandler(e)}/> <img src={metIcon} alt="metIcon" name="met" onMouseEnter={e => this.hoverHandler(e)} onMouseLeave={() => this.leaveHandler()} onClick={() => this.clickHandler()} />
                  <br/>
                  <br/>
                  <p>{this.state.link !== "" ? this.renderLinkMessage() : null}</p>
                </div>
            </div>
        </div>
    )
  }
}

export default Home
