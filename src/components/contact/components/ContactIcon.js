import React from 'react'
import '../css/contactIcon.css'

const ContactIcon = (props) => {
    return (
        <div className="contactIcon">
            <p><a href={props.link}><img src={props.image} alt={props.alt} /></a></p>
        </div>
    )
}

export default ContactIcon