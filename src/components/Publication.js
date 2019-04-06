import React, { Component } from 'react'
import exterminator from "../media/photos/exterminator_photo.jpg"
import kindlingPhoto from "../media/photos/reduced_kindling_photo.jpg"

export default class Publication extends Component {
    state = {
        name: this.props.name
    }

    render() {
        return (
        <div>
            <h2>{this.state.name}</h2>
            {this.props.name === "Kindling the Fire" ?  <img src={kindlingPhoto} alt="kindlingPhoto" /> : null}
            {this.props.name === "Call Me 'The Exterminator'" ?  <img src={exterminator} alt="exterminatorPhoto" /> : null}
        </div>
        )
    }
}
