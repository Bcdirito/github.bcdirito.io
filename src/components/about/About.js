import React from 'react'
import "./about.scss"

const About = () => (
  <div className="aboutPage">
    <h1>About Me</h1>
    <div className="aboutContent">
      <ul className="aboutText">
        <li><span role="img" aria-label="gender">🚻</span>He/Him/His</li>
        <li><span role="img" aria-label="baby">👼🏻</span>Born in Connecticut but raised in South Florida</li>
        <li><span role="img" aria-label="microphone">🎤</span>Former professional actor/singer/dancer/musician</li>
        <li><span role="img" aria-label="work">🧑🏻‍💻</span>Passionate about work that enriches everyday communities</li>
        <li><span role="img" aria-label="burger">🍔</span>Bob's Burgers superfan</li>
        <li><span role="img" aria-label="guitar">🎸</span>Music nerd</li>
        <li><span role="img" aria-label="dice">🎲</span>Board game enthusiast</li>
      </ul>
    </div>
  </div>
)

export default About
