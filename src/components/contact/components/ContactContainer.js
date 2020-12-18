import React, { Component } from 'react'
import "../css/contactContainer.css"
import ninPhoto from "../../../media/photos/nin_photo.jpg"

export default class ContactContainer extends Component {
    render() {
        return (
            <div id="contactContainer">
                <img src={ninPhoto} />
                <span>Photo by Matthew Dain</span>
            </div>
        )
    }
}
