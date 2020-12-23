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
    target.nextElementSibling.classList.toggle("hideContainer")
  }

  featureSelectedProject  = (data) => {
    this.setState({
      ...this.state,
      featured: true,
      featuredType: data.type,
      featuredData: data
    })
  }

  exitModal = (classList) => {
    if (!classList.contains("externalLink")) {
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
            <h3 className="containerHeader" onClick={(e) => this.displayContainer(e.target)}>Projects</h3>
            <div className="cardContainer hideContainer">
              <Carousel>
                {this.renderDemoProjects()}
              </Carousel>
            </div>
          </div>
          <div id="publicationContainer">
            <h3 className="containerHeader" onClick={(e) => this.displayContainer(e.target)}>Publications</h3>
            <div className="cardContainer hideContainer">
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
