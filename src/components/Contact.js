import React, { Component } from 'react'
import contactPhoto from "../media/photos/contact_photo.jpeg"
import linkedInIcon from "../media/icons/linkedin_icon.png"
import emailIcon from "../media/icons/email_icon.png"

import "../css/contact.css"

export default class Contact extends Component {
  state = {
    link: ""
  }

  enterHandler = e => {
    this.setState({link: e.target.name})
  }

  leaveHandler = () => {
    this.setState({link: ""})
  }

  renderLinkMessage = () => {
    if (this.state.link === "linkedIn") return "Click here to connect with me on LinkedIn"
    else if (this.state.link === "email") return "Click here to open your mailer or you can email me at: bdirito.dev@gmail.com "
  }

  render() {
    return (
      <div className="contactPage">
        <h1>Contact</h1>
          <div className="contactContent">
            {window.screen.orientation.type.includes("landscape") || window.screen.width >= 768 ? <img id="contactPhoto" src={contactPhoto} alt="contactPhoto"/> : <div className="mobileDirections"><p>Tap an icon to connect with me on LinkedIn or send me an email</p></div>}
            <br/>
            <br/>
            <div className="contactIcons">
              <a href="https://www.linkedin.com/in/brian-dirito-7a7174145/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="linkedInIcon" name="linkedIn" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a><a href="mailto:bdirito.dev@gmail.com"><img src={emailIcon} alt="emailIcon" name="email" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a>
              <br/>
              <p className="linkMessage">{this.state.link !== "" ? this.renderLinkMessage() : <br/>}</p>
            </div>
          </div>
      </div>
    )
  }
}
