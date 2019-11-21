import React, { Component } from 'react'
import ProjectCard from "./ProjectCard"
import Project from "./Project"
import Publication from "./Publication"

import publicationData from "../db/publications"
import projectData from "../db/projects"

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

  renderButtons = () => {
    return (
      <div className={!navigator.userAgent.includes("Mobile") ? "desktopButtons" : "buttons"}>
          <button onClick={e => this.featureHandler(e)} name="projects">Projects</button>
          <button onClick={e => this.featureHandler(e)} name="publications">Publications</button>
      </div>
    )
  }

  renderDemoProjects = () => {
    const projects = projectData.map(proj => {
      return <ProjectCard key={proj.name} data={proj} name={proj.name} card={proj.card} blurb={proj.blurb} select={this.featureSelectedProject} />
    })

    return (
      <div className="contentCards">
          {projects}
        </div>
      )
  }

  renderPublications = () => {
    const publications = publicationData.map(pub => {
      return <ProjectCard key={pub.name} data={pub} name={pub.name} card={pub.card} blurb={pub.blurb} select={this.featureSelectedProject} />
    })

    return (
      <div className="contentCards">
        {publications}
    </div>
    )
  }

  renderSelectedProject  = () => {
    if (this.state.featuredWork.type === "publication") return <Publication data={this.state.featuredWork}/>
    else return <Project data={this.state.featuredWork}/>
  }
  
  render() {
    return (
      <div className="projectsPage">
        <h1>{window.screen.width >= 768 ? "Projects and Publications" : "Works"}</h1>
        {this.state.featuredClick === false ? this.renderButtons() : null}
        <br/>
        <div className={this.state.featuredClick === true ? "projectContainerClicked" : "projectContainer"}>
            {this.state.projects === true && (this.state.featuredClick === false && this.state.publications === false) ? this.renderDemoProjects() : null}
            {this.state.publications === true && (this.state.featuredClick === false && this.state.projects === false) ? this.renderPublications() : null}
            {this.state.featuredClick === true && (this.state.publications === false && this.state.projects === false) ? this.renderSelectedProject() : null}
        </div>
        <br/>
        {this.state.featuredClick === true ? <div className={!navigator.userAgent.includes("Mobile") ? "underFeatureButtons" : null}>{this.renderButtons()}</div>: null}
      </div>
    )
  }
}
