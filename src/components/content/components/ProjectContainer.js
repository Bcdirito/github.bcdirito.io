import React, { Component } from 'react'
import ProjectCard from "./ProjectCard"
// import Project from "./Project"
// import Publication from "../../Publication"

import publicationData from "../../../db/publications"
import projectData from "../../../db/projects"

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

  featureSelectedProject = (obj) => {
    this.setState({
      featuredClick: true,
      featuredWork: obj,
      publications: false,
      projects: false,
    })
  }

  renderDemoProjects = () => {
    const projectContext = require.context("../../../media/photos/projects")
    const projects = projectData.map(proj => {
      return <ProjectCard key={proj.name} data={proj} name={proj.name} card={proj.card} blurb={proj.blurb} select={this.featureSelectedProject} context={projectContext} onClick={(e) => this.renderSelectedProject(e)}/>
    })

    return (
      <div className="contentCards">
          {projects}
        </div>
      )
  }

  renderPublications = () => {
    const publicationContext = require.context("../../../media/photos/publications")
    const publications = publicationData.map(pub => {
      return <ProjectCard key={pub.name} data={pub} name={pub.name} card={pub.card} blurb={pub.blurb} select={this.featureSelectedProject} context={publicationContext} />
    })

    return (
      <div className="contentCards">
        {publications}
    </div>
    )
  }

  displayContainer = (target) => {
    target.nextElementSibling.classList.toggle("hideContainer")
  }

  renderSelectedProject  = (target) => {
    console.log(target)
    // if (this.state.featuredWork.type === "publication") return <Publication data={this.state.featuredWork}/>
    // else return <Project data={this.state.featuredWork}/>
  }
  
  render() {
    return (
      <div className="projectsPage">
        <h1>Works</h1>
        <div id="projectContainer">
          <h3 className="containerHeader" onClick={(e) => this.displayContainer(e.target)}>Projects</h3>
          <div className="cardContainer hideContainer">
            {this.renderDemoProjects()}
          </div>
        </div>
        <div id="publicationContainer">
          <h3 className="containerHeader" onClick={(e) => this.displayContainer(e.target)}>Publications</h3>
          <div className="cardContainer hideContainer">
            {this.renderPublications()}
          </div>
        </div>
        {/* 
        <div className={this.state.featuredClick === true ? "projectContainerClicked" : "projectContainer"}>
            {this.state.projects === true && (this.state.featuredClick === false && this.state.publications === false) ? this.renderDemoProjects() : null}
            {this.state.publications === true && (this.state.featuredClick === false && this.state.projects === false) ? this.renderPublications() : null}
            {this.state.featuredClick === true && (this.state.publications === false && this.state.projects === false) ? this.renderSelectedProject() : null}
        </div>
        <br/>
        {this.state.featuredClick === true ? <div className={!navigator.userAgent.includes("Mobile") ? "underFeatureButtons" : null}>{this.renderButtons()}</div>: null} */}
      </div>
    )
  }
}
