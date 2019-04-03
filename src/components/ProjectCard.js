import React, { Component } from 'react'

export default class ProjectCard extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        <img src={this.props.card} alt="projectImage"/>
        When you hover over them, the name appears.
        Clicking on it will make it modal and open a video player
        {this.props.description}
      </div>
    )
  }
}
