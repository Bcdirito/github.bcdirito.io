import React, { Component } from 'react'

export default class ProjectCard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <br/>
        <img src={this.props.card} alt="projectImage"/>
        {/* When you hover over them, the name appears.
        Clicking on it will make it modal and open a video player */}
        <br/>
        {this.props.blurb}
      </div>
    )
  }
}
