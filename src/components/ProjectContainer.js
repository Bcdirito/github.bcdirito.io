import React, { Component } from 'react'
import ProjectCard from "./ProjectCard"
import Project from "./Project"
import Publication from "./Publication"

import myBrewsCard from "../media/photos/myBrews_card.jpg"
import virtualMetCard from "../media/photos/virtual_met_card.jpg"
import goodWorkCard from "../media/photos/good_work_card.jpg"
import kindlingCard from "../media/photos/kindling_card.jpeg"
import exterminatorCard from "../media/photos/exterminator_card.jpg"

import "../css/projectContainer.css"

export default class ProjectContainer extends Component {

  state = {
    featuredClick: false,
    featuredWork: "",
    publications: false,
    projects: false
  }

  featureHandler  = (e) => {
    if (e.target.name === "projects") this.featureProjects()
    else if (e.target.name === "publications") this.featurePublications()
    else this.featureSelectedProject()
  }

  featureProjects = () => {
    this.setState({
      ...this.state,
      featuredClick: false,
      publications: false,
      projects: !this.state.projects
    })
  }

  featurePublications = () => {
    this.setState({
      ...this.state,
      featuredClick: false,
      publications: !this.state.publications,
      projects: false,
    })
  }

  featureSelectedProject = (e) => {
    this.setState({
      featuredClick: true,
      featuredWork: e.target.name,
      publications: false,
      projects: false,
    })
  }

  renderButtons = () => {
    return (
      <div className="buttons">
          <button onClick={e => this.featureHandler(e)} name="projects">Projects</button>
          <button onClick={e => this.featureHandler(e)} name="publications">Publications</button>
      </div>
    )
  }

  renderDemoProjects = () => {
    return (<div className="contentCards">
              <ProjectCard name="myBrews"card={myBrewsCard} blurb="A CLI companion app for coffee" select={this.featureSelectedProject}/>
              <ProjectCard name="Virtual Met" card={virtualMetCard}blurb="Take digital tours of the Met 5th Ave Museum" select={this.featureSelectedProject}/>
              <ProjectCard name="Good Work" 
              card={goodWorkCard} blurb="Goal tracking with partner accountability for reducing stress and anxiety" select={this.featureSelectedProject}/>
      </div>)
  }

  renderPublications = () => {
    return (
      <div className="contentCards">
        <ProjectCard name="Kindling the Fire" card={kindlingCard} blurb="Staying Inspired during the Job Search Marathon" select={this.featureSelectedProject}/>
        <ProjectCard name="Call Me 'The Exterminator'" card={exterminatorCard} blurb="Becoming the Champion Debugger" select={this.featureSelectedProject}/>
    </div>
    )
  }

  renderSelectedProject  = () => {
    if (this.state.featuredWork === "Kindling the Fire" || this.state.featuredWork === "Call Me 'The Exterminator'") return <Publication name={this.state.featuredWork}/>
    else return <Project name={this.state.featuredWork}/>
  }
  
  render() {
    return (
      <div className="projectsPage">
        <h1>Projects and Publications</h1>
        {this.state.featuredClick === false ? this.renderButtons() : null}
        <br/>
        <div className={this.state.featuredClick === true ? "projectContainerClicked": "projectContainer"}>
            {this.state.projects === true && (this.state.featuredClick === false && this.state.publications === false) ? this.renderDemoProjects() : null}
            {this.state.publications === true && (this.state.featuredClick === false && this.state.projects === false) ? this.renderPublications() : null}
            {this.state.featuredClick === true && (this.state.publications === false && this.state.projects === false) ? this.renderSelectedProject() : null}
        </div>
        <br/>
        {this.state.featuredClick === true ? this.renderButtons() : null}
      </div>
    )
  }
}
