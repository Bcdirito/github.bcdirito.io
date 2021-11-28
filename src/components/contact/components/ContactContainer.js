import React from 'react'
import "../css/contactContainer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profileImg from "../media/photos/nin_photo.jpg"

const ContactContainer = () => {
    const renderContactInfo = () => {


        return (
            <React.Fragment>
                {/* <span className="photoCredit">&#169; Photo by Matthew Dain</span> */}
                <img src={profileImg} alt="profile" />
                <div>
                    <h1>Brian DiRito</h1>
                    <p>Software Engineer @Policygenius</p>
                    <p>He/Him/His</p>
                    <div className="iconContainer">
                        <a href="mailto:bdirito.dev@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href="https://github.com/Bcdirito">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://github.com/Bcdirito">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div> 
                </div>
            </React.Fragment>
        )        
    }

    return (
        <div className="contactContainer">
            {renderContactInfo()}
        </div>
    )
}

export default ContactContainer
