import React from 'react'
import "../css/about.css"

const About = () => {
    return (
      <div className="aboutPage">
        <h1 className="contentHeader">About Me</h1>
        <div className="aboutContent">
          <ul className="aboutText">
            <li><span role="img" aria-label="job">🟧</span>Software Engineer @ <a href="https://www.policygenius.com/" target="_blank" rel="noopener noreferrer">Policygenius</a></li>
            <li><span role="img" aria-label="baby">👼🏻</span>Born in Connecticut but raised in South Florida</li>
            <li><span role="img" aria-label="microphone">🎤</span>Former professional Actor/Singer/Dancer/Musician</li>
            <li><span role="img" aria-label="work">🧑🏻‍💻</span>Passionate about work that enriches everyday communities</li>
            <li><span role="img" aria-label="burger">🍔</span>Bob's Burgers Super Fan</li>
            <li><span role="img" aria-label="guitar">🎸</span>Avid Music Nerd</li>
            <li><span role="img" aria-label="dice">🎲</span>Board Game Enthusiast</li>
          </ul>
        </div>
      </div>
    )
}

export default About
