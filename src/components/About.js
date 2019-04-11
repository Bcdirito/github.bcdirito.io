import React, { Component } from 'react'
import aboutMePhoto from "../media/photos/about_me_photo.jpg"
import "../css/about.css"

export default class About extends Component {
  render() {
    return (
      <div className="aboutPage">
        <h1>About Me</h1>
        <div className="aboutContent">
        {window.screen.orientation.type.includes("landscape") || window.screen.width >= 768 ? <img src={aboutMePhoto} alt="aboutMePhoto"/> : null}
          <div className="aboutText">
            <p>Born in Connecticut, but raised in South Florida, Brian spent most of his childhood singing, dancing, acting, and playing various instruments. He caught the performance bug quite early on and wanted to spend the rest of his life onstage. After attending University of Miami, where he received a Bachelor of Fine Arts, he moved to New York to chase those Broadway dreams!</p>

            <p>Having spent the better part of a decade as a professional actor/singer/dancer/musician and having been part of multiple award-winning projects, he decided it was time to move on and explore a new world. He had always loved the idea of building new works and helping the world be more joyful, so he was determined to make that a reality. While he was exploring every option he stumbled upon, he found the ability to accomplish said goals and utilize the skills he developed as a performer within the world of web development. Shortly after that, he enrolled in Flatiron School's elite immersive bootcamp.</p>

            <p>Now that he has graduated from Flatiron, he is hungry to create and develop works of quality and excited to experience the adventures that come with this new path.</p>
          </div>
        </div>
      </div>
    )
  }
}
