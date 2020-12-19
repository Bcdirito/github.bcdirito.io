import React from 'react'
import aboutMePhoto from "../media/photos/about_me_photo.jpg"
import "../css/about.css"

const About = () => {
    return (
      <div className="aboutPage">
        <h1 className="contentHeader">About Me</h1>
        <div className="aboutContent">
        <img src={aboutMePhoto} alt="aboutMePhoto"/>
          <h3 className="aboutHeader">The Basics</h3>
          <ul className="aboutText">
            <li>Born in Connecticut but raised in South Florida</li>
            <li>Former professional Actor/Singer/Dancer/Musician</li>
            <li>Passionate about work that enriches everyday communities</li>
            <li>Bob's Burgers Super Fan</li>
            <li>Avid Music Nerd</li>
            <li>Board Game Enthusiast</li>
          </ul>
        </div>
      </div>
    )
}

export default About
