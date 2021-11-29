import React from 'react'
import "./contact.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profileImg from "../../media/images/nin_photo.jpg"

const Contact = () => (
    <div className="contactContainer">
        <img src={profileImg} alt="profile" title="&copy; Matthew Dain"/>
            <div>
                <h1>Brian DiRito</h1>
                <p>Software Engineer @Policygenius</p>
                <div className="iconContainer">
                    <a href="mailto:bdirito.dev@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="https://github.com/Bcdirito" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/briandirito/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div> 
            </div>
    </div>
)

export default Contact
