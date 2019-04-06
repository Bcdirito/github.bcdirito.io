import React, { Component } from 'react'
import "../css/projectCard.css"

export default class ProjectCard extends Component {
  render() {
    return (
      <div className="projectCard">
        <h3>{this.props.name}</h3>
        <br/>
        <img name={this.props.name} src={this.props.card} onClick={e => this.props.select(e)} alt="projectImage"/>
        {/* When you hover over them, the name appears.
        Clicking on it will make it modal and open a video player */}
        <br/>
        {this.props.blurb}
      </div>
    )
  }
}
