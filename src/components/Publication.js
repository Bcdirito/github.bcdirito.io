import React, { Component } from 'react'
import mediumIcon from "../media/icons/medium_icon.png"
import "../css/publication.css"

export default class Publication extends Component {
    state = {
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

    render() {
        return (
        <div className="publication">
            <h2>{this.props.data.name}</h2>
            <div className="publicationContent">
                <img src={this.props.data.image} alt="articleImage" className="articleImage" />
                <p className="description">{this.props.data.blurb}</p>
                <a href={this.props.data.link} target="_blank" rel="noopener noreferrer"><img src={mediumIcon} alt="mediumIcon" onMouseEnter={() => this.enterHandler()} onMouseLeave={() => this.leaveHandler()} id="kindling"/></a>
            </div>
            <p className="hoverText">{this.state.hover === true ? `Click here to read ${this.props.data.name}` : null}
            {navigator.userAgent.includes("Mobile") === true ? "Tap the icon the read the article" : <br/>}</p>
        </div>
        )
    }
}
