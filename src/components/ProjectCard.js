import React, { Component } from 'react'
import "../css/projectCard.css"

export default class ProjectCard extends Component {
  render() {
    return (
      <div className="projectCard" data-name={this.props.name} onClick={e => this.props.select(e)}>
        <h3 data-name={this.props.name}>{this.props.name}</h3>
        <br/>
        <img data-name={this.props.name} src={this.props.card} alt="projectImage"/>
        {/* When you hover over them, the name appears.
        Clicking on it will make it modal and open a video player */}
        <br/>
        {!navigator.userAgent.includes("Mobile") ? this.props.blurb : null}
      </div>
    )
  }
}
