import React, { Component } from 'react'
import "../css/projectCard.css"

export default class ProjectCard extends Component {
  render() {
    return (
      <div className="projectCard" data-name={this.props.name} onClick={() => this.props.select(this.props.data)}>
        <h3 data-name={this.props.name}>{this.props.name}</h3>
        <br/>
        <img data-name={this.props.name} src={this.props.card} alt="projectImage"/>
        <br/>
        {!navigator.userAgent.includes("Mobile") ? this.props.blurb : null}
      </div>
    )
  }
}
