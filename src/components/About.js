import React, { Component } from 'react'
import aboutMePhoto from "../media/about_me_photo.jpg"
import "../css/about.css"

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About Me</h1>
        <div className="aboutContent">
          <img src={aboutMePhoto} alt="aboutMePhoto"/>
          <div className="aboutText">
            <p>First paragraph about growing up through college</p>
            <p>Second paragraph about transition</p>
            <p>Third Paragraph about Flatiron/developer life</p>
          </div>
        </div>
      </div>
    )
  }
}
