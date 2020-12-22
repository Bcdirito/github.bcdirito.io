import React, { Component } from 'react'
import "../css/project.css"

export default class Project extends Component {

  renderDescriptionItems = (description) => {
    return description.map(desc => {
      return <li>{desc}</li>
    })
  }

  renderSkillIcons = (skills, iconContext) => {
    return skills.map(skill => {
      return <img key={skill} src={iconContext(`./${skill}_icon.png`)} alt={`${skill}Icon`} className="skillIcon" />
    })
  }

  renderDeploymentLink = (link) => {
    return (
      <p className="descriptionLink">
        To view the active beta, click <a href={link} target="_blank" rel="noopener noreferrer" className="externalLink">here</a>
      </p>
    )
  }

  render() {
    const {data, projectContext, iconContext} = this.props

    return (
      <div className="projectContent">
        <h2 className="projectHeader">{data.name}</h2>
        <img src={projectContext(`./${data.image}`)} alt="projectImage" className="projectImage" />
        <div className="description">
          <div className="textContainer">
            <h3 className="projectSubheader">Description:</h3>
            <ul className="descriptionItems">
              {this.renderDescriptionItems(data.description)}
            </ul>
          </div>
          <div className="skillContainer">
            <h3 className="projectSubheader">Built With:</h3>
            <div className="iconSpace">
              {this.renderSkillIcons(data.skills, iconContext)}
            </div>
            <p className="descriptionLink">To view the repo, click <a href={data.repo} target="_blank" rel="noopener noreferrer" className="externalLink">here</a></p>
            {data.deployment.length > 0 ? this.renderDeploymentLink(data.deployment) : null}
          </div>
        </div>
      </div>
    )
  }
}