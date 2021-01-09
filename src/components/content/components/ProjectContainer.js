import React, { Component } from 'react'
import ProjectCard from "./ProjectCard"
import WorkModal from "./WorkModal"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import publicationData from "../../../db/publications"
import projectData from "../../../db/projects"

import "../css/projectContainer.css"

export default class ProjectContainer extends Component {

  state = {
    featured: false,
    featuredData: {}
  }

  renderDemoProjects = () => {
    const projectContext = require.context("../../../media/photos/projects")
    return projectData.map(proj => {
      return <ProjectCard key={proj.name} data={proj} name={proj.name} card={proj.card} blurb={proj.blurb} select={this.featureSelectedProject} context={projectContext} onClick={(e) => this.renderSelectedProject(e)}/>
    })
  }

  renderPublications = () => {
    const publicationContext = require.context("../../../media/photos/publications")
    return publicationData.map(pub => {
      return <ProjectCard key={pub.name} data={pub} name={pub.name} card={pub.card} blurb={pub.blurb} select={this.featureSelectedProject} context={publicationContext} />
    })
  }

  displayContainer = (target) => {
    if (Array.from(target.classList).includes("projectContainerHeader")) document.getElementById("projectCardContainer").classList.toggle("hideContainer")
    else document.getElementById("publicationCardContainer").classList.toggle("hideContainer")

    this.hideOtherContainer(target.innerText === "Projects" ? "publicationCardContainer" : "projectCardContainer")
  }

  hideOtherContainer = (idStr) => {
    const container = document.getElementById(idStr)
    if (!Array.from(container.classList).includes("hideContainer")) container.classList.toggle("hideContainer")
  }

  featureSelectedProject  = (data) => {
    document.getElementById("contentContainer").classList.toggle("fixedContent")
    this.setState({
      ...this.state,
      featured: true,
      featuredType: data.type,
      featuredData: data
    })
  }

  exitModal = (classList) => {
    if (!classList.contains("externalLink")) {
      document.getElementById("contentContainer").classList.toggle("fixedContent")
      this.setState({
        ...this.state,
        featured: false,
        featuredData: {}
      })
    }
  }
  
  render() {
    return (
      <div className="projectsPage">
        <h1 className="contentHeader">Works</h1>
        {this.state.featured === true ? <WorkModal data={this.state.featuredData} exit={this.exitModal} iconImages={this.props.iconImages} /> : null}
        <div id="worksContainer">
          <div id="projectContainer">
            <div className="headerDiv">
              <span className="containerHeader projectContainerHeader" onClick={(e) => this.displayContainer(e.target)}>Projects</span>&nbsp;&nbsp;&nbsp;
              <span className="containerHeader publicationContainerHeader" onClick={(e) => this.displayContainer(e.target)}>Publications</span>
            </div>
            <div id="projectCardContainer" className="cardContainer hideContainer">
              <Carousel>
                {this.renderDemoProjects()}
              </Carousel>
            </div>
            <div id="publicationCardContainer" className="cardContainer hideContainer">
              <Carousel>
                {this.renderPublications()}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
