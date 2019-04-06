import React, { Component } from 'react'
import ProjectCard from "./ProjectCard"
import Project from "./Project"
import myBrewsCard from "../media/photos/myBrews_card.jpg"
import virtualMetCard from "../media/photos/virtual_met_card.jpg"
import goodWorkCard from "../media/photos/good_work_card.jpg"
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
      featuredClick: !this.state.featuredClick,
      publications: false,
      projects: false,
    })
  }

  featureSelectedProject = (e) => {
    this.setState({
      featuredClick: false,
      featuredWork: e.target.name,
      publications: !this.state.publications,
      projects: false,
    })
  }

  renderDemoProjects = () => {
    return (<div className="contentCards">
              <ProjectCard name="myBrews"card={myBrewsCard} blurb="A CLI companion app for coffee"/>
              <ProjectCard name="Virtual Met" card={virtualMetCard}blurb="Take digital tours of the Met 5th Ave Museum"/>
              <ProjectCard name="Good Work" 
              card={goodWorkCard} blurb="Goal tracking with partner accountability for reducing stress and anxiety"/>
      </div>)
  }

  renderPublications = () => {
    console.log("made it to renderPublications")
  }

  renderSelectedProject  = () => {
    return <Project />
  }
  
  render() {
    return (
      <div>
        <h1>Projects and Publications</h1>
        <div className="projectContainer">
            <button onClick={e => this.featureHandler(e)} name="projects">Projects</button>
            <button onClick={e => this.featureHandler(e)} name="publications">Publications</button>
            <br/>
            <div className="contentCards">
              {this.state.projects === true && (this.state.featuredClick === false && this.state.publications === false) ? this.renderDemoProjects() : null}
              {this.state.publications === true && (this.state.featuredClick === false && this.state.projects === false) ? this.renderPublications() : null}
              {this.state.featuredClick === true && (this.state.publications === false && this.state.projects === false) ? this.renderSelectedProject() : null}
            </div>
        </div>
      </div>
    )
  }
}
