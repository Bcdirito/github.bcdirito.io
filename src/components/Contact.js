import React, { Component } from 'react'
import contactPhoto from "../media/photos/contact_photo.jpeg"
import linkedInIcon from "../media/icons/linkedin_icon.png"
import mediumIcon from "../media/icons/medium_icon.png"
import gitHubIcon from "../media/icons/github_icon.png"
import phoneIcon from "../media/icons/phone_icon.png"
import emailIcon from "../media/icons/email_icon.png"

export default class Contact extends Component {
  state = {
    email: "bdirito.dev@gmail.com"
  }

  render() {
    return (
      <div>
        <h1>Contact Info:</h1>
          <img src={contactPhoto} alt="contactPhoto"/>
          <div className="contactInfo">
            <a href="https://www.linkedin.com/in/brian-dirito-7a7174145/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="linkedInIcon"/>LinkedIn</a>
            <br/>
            <a href="https://github.com/Bcdirito" target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} alt="gitHubIcon"/>Github</a>
            <br/>
            <a href="https://medium.com/@bdirito91" target="_blank" rel="noopener noreferrer"><img src={mediumIcon} alt="mediumIcon"/>Medium</a>
            <br/>
            <img src={phoneIcon} alt="phoneIcon"/>(954)-234-1748
            <br/>
            <a href={`mailto:${this.state.email}`}><img src={emailIcon} alt="emailIcon"/>{this.state.email}</a>
          </div>
      </div>
    )
  }
}
