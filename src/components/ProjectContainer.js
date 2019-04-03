import React, { Component } from 'react'
import ProjectCard from "./ProjectCard"
import myBrewsCard from "../media/myBrews_card.jpg"

export default class ProjectContainer extends Component {
  render() {
    return (
      <div>
        <h1>Projects and Works</h1>
        <div className="projectContainer">
          This is where projects will go.
          <br/>
          Button for Projects. Button for Publishings
          <br></br>
          <ProjectCard name="myBrews"card={myBrewsCard}/>
          A CLI app for Coffee
        </div>
      </div>
    )
  }
}
