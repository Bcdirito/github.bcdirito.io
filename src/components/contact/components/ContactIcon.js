import React from 'react'
import '../css/contactIcon.css'

const ContactIcon = (props) => {
    return (
        <div className="contactIcon">
            <p><a href={props.link} target="_blank" rel="noopener noreferrer"><img src={props.iconPhotos(`./${props.name}_icon.png`)} alt={props.alt} /></a></p>
        </div>
    )
}

export default ContactIcon