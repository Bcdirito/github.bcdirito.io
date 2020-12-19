import React, { Component } from 'react'
import PhotoContainer from "./PhotoContainer"
import ContactIcon from "./ContactIcon"
import "../css/contactContainer.css"
import ninPhoto from "../media/photos/nin_photo.jpg"

import iconData from "../../../db/icons"
import resume from "../../../media/pdfs/resume.pdf"

export default class ContactContainer extends Component {
    renderContactIcons() {
        const icons = []
        const photos = require.context("../../../media/icons/general/", true)
        for (const key in iconData){ 
            let icon = iconData[key]
            if (key === 'resume') icons.push(<ContactIcon key={icon.name} link={resume} image={icon.image} alt={icon.alt} iconPhotos={photos} name={icon.name}/>)
            else icons.push(<ContactIcon key={icon.name} link={icon.linkStr} image={icon.image} alt={icon.alt} iconPhotos={photos} name={icon.name}/>)
        }

        return (
            <div id="contactInfo">
                <h1 id="contactInfoHeader">Brian DiRito</h1>
                <h2 className="subHeader">He/Him/His</h2>
                <h2 className="subHeader">Full-Stack Developer</h2>
                {icons}
            </div>
        )        
    }
    render() {
        return (
            <div id="contactContainer">
                <PhotoContainer photo={ninPhoto} />
                {this.renderContactIcons()}
                <span className="photoCredit">&#169; Photo by Matthew Dain</span>
            </div>
        )
    }
}
