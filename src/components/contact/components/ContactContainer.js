import React, { Component } from 'react'
import ContactIcon from "./ContactIcon"
import "../css/contactContainer.css"

import iconData from "../db/icons"

export default class ContactContainer extends Component {
    renderContactInfo() {
        const icons = []
        const photos = require.context("../media/icons/", true)
        for (const key in iconData){ 
            const icon = iconData[key]
            icons.push(<ContactIcon key={icon.name} link={icon.linkStr} image={icon.image} alt={icon.alt} iconPhotos={photos} name={icon.name}/>)
        }

        return (
            <div id="contactInfo">
                <h1 id="contactInfoHeader">Brian DiRito</h1>
                <h2 className="subHeader">He/Him/His</h2>
                <h2 className="subHeader">Full-Stack Developer</h2>
                <div className="iconContainer">
                    {icons}
                </div>
            </div>
        )        
    }
    render() {
        return (
            <div id="contactContainer">
                {this.renderContactInfo()}
                <span className="photoCredit">&#169; Photo by Matthew Dain</span>
            </div>
        )
    }
}
