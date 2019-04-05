import React, { Component } from 'react'
import ProjectCard from "./ProjectCard"
import Project from "./Project"
import myBrewsCard from "../media/myBrews_card.jpg"
import virtualMetCard from "../media/virtual_met_card.jpg"
import goodWorkCard from "../media/good_work_card.jpg"
import "../css/projectContainer.css"

export default class ProjectContainer extends Component {

  state = {
    featured: false,
    publications: false,
    projects: false
  }

  render() {
    return (
      <div>
        <h1>Projects and Publications</h1>
        <div className="projectContainer">
            This is where projects will go.
            <br/>
            Button for Projects. Button for Publishings
            <br/>
            <div className="projectCards">
            <ProjectCard name="myBrews"card={myBrewsCard} blurb="A CLI companion app for coffee"/>
            <ProjectCard name="Virtual Met" card={virtualMetCard}blurb="Take digital tours of the Met 5th Ave Museum"/>
            <ProjectCard name="Good Work" 
            card={goodWorkCard} blurb="Goal tracking with partner accountability for reducing stress and anxiety"/>
            <Project />
          </div>
        </div>
      </div>
    )
  }
}
