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

  render() {
    const {data, projectContext, iconContext} = this.props

    return (
      <div className="projectContent">
        <h2>{data.name}</h2>
        <img src={projectContext(`./${data.image}`)} alt="projectImage" className="projectImage" />
        <div className="description">
          <div className="descriptionContent">
            <ul className="descriptionItems">
              {this.renderDescriptionItems(data.description)}
            </ul>
            <br/>
            <div className="skillContainer">
              <h3>Built With:</h3>
              {this.renderSkillIcons(data.skills, iconContext)}
            </div>
            <p>To view the repo, click <a href={data.repo} target="_blank" rel="noopener noreferrer" className="externalLink">here</a></p>
            <p>To view the active beta, click <a href={data.deployment} target="_blank" rel="noopener noreferrer" className="externalLink">here</a></p>
          </div>
        </div>
      </div>
    )
  }
}