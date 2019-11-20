import React, { Component } from 'react'
import contactPhoto from "../media/photos/contact_photo.jpeg"
import resume from "../media/pdfs/resume.pdf"
import linkedInIcon from "../media/icons/linkedin_icon.png"
import emailIcon from "../media/icons/email_icon.png"
import resumeIcon from "../media/icons/resume_icon.png"

import "../css/contact.css"

export default class Contact extends Component {
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
      <div className="contactPage">
        <h1>Contact</h1>
          <div className="contactContent">
            <img id="contactPhoto" src={contactPhoto} alt="contactPhoto"/>
            <br/>
            <br/>
            <div className="contactIcons">
              <a href="https://www.linkedin.com/in/brian-dirito-7a7174145/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="linkedInIcon" message="Click here to connect with me on LinkedIn" name="linkedIn" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a><a href={resume} target="_blank" rel="noopener noreferrer"><img src={resumeIcon} alt="resumeIcon" message="Click here to view and download my Résumé" name="resume" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()}/></a><a href="mailto:bdirito.dev@gmail.com"><img src={emailIcon} message="Click here to open your mailer or you can email me at: bdirito.dev@gmail.com" alt="emailIcon" name="email" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a>
              <br/>
              <p className="linkMessage">{this.state.link !== "" && !navigator.userAgent.includes("Mobile")? this.state.message : <br/>}</p>
            </div>
          </div>
      </div>
    )
  }
}
