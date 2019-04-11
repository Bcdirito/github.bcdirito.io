import React, { Component } from 'react'
import exterminatorPhoto from "../media/photos/exterminator_photo.jpg"
import kindlingPhoto from "../media/photos/reduced_kindling_photo.jpg"
import mediumIcon from "../media/icons/medium_icon.png"
import "../css/publication.css"

export default class Publication extends Component {
    state = {
        name: this.props.name,
        hover: false
    }

    enterHandler = () => {
        this.setState({...this.state, hover: true})
    }

    leaveHandler = () => {
        this.setState({...this.state, hover: false})
    }

    renderHoverText = () => {
        return `Click here to read ${this.state.name}`
    }

    renderKindling = () => {
        return (
            <div className="publicationContent">
                <img src={kindlingPhoto} alt="kindlingPhoto" className="articleImage" />
                <p className="description">Staying Inspired during the Job Search Marathon</p>
                <a href="https://medium.com/@bdirito91/kindling-the-fire-24b80e09907e" target="_blank" rel="noopener noreferrer"><img src={mediumIcon} alt="mediumIcon" onMouseEnter={() => this.enterHandler()} onMouseLeave={() => this.leaveHandler()} id="kindling"/></a>
                <p className="hoverText">{this.state.hover === true ? this.renderHoverText() : <br/>}
                {navigator.userAgent.includes("Mobile") === true ? "Tap the icon the read the article" : <br/>}</p>
            </div>
        )
    }

    renderExterminator = () => {
        return (
            <div className="publicationContent">
                <img className="articleImage" src={exterminatorPhoto} alt="exterminatorPhoto" />
                <p>Becoming the Champion Debugger</p>
                <a href="https://medium.com/@bdirito91/call-me-the-exterminator-17b5a579595b" target="_blank" rel="noopener noreferrer"><img src={mediumIcon} alt="mediumIcon" onMouseEnter={() => this.enterHandler()} onMouseLeave={() => this.leaveHandler()}/></a>
                <p className="hoverText">{this.state.hover === true ? this.renderHoverText() : <br/>}
                {navigator.userAgent.includes("Mobile") === true ? "Tap the icon the read the article" : <br/>}</p>
            </div>
        )
    }

    render() {
        return (
        <div className="publication">
            <h2>{this.state.name}</h2>
            {this.props.name === "Kindling the Fire" ? this.renderKindling(): null}
            {this.props.name === "Call Me 'The Exterminator'" ?  this.renderExterminator() : null}
            <br/>
        </div>
        )
    }
}
