import React, { Component } from 'react'
import metDemo from "../media/videos/virtual_met_demo.mp4"
import myBrewsDemo from "../media/videos/myBrews_demo.mp4"
import goodWorkDemo from "../media/videos/good_work_demo.mp4"
import githubIcon from "../media/icons/github_icon.png"
import metIcon from "../media/icons/met_icon.png"

import "../css/project.css"

export default class Project extends Component {
  state = {
    project: this.props.name
  }

  openRepos = () => {
    if (this.state.project === "myBrews") window.open("https://github.com/Bcdirito/myBrews")
    else if (this.state.project === "Virtual Met"){
      window.open("https://github.com/Bcdirito/virtual_met_front")
      window.open("https://github.com/Bcdirito/virtual_met_back")
    } else {
      window.open("https://github.com/Bcdirito/good_work_front")
      window.open("https://github.com/Bcdirito/good_work_back")
    }
  }

  renderMyBrews = () => {
    return (
    <div className="descriptionContent">
      <p><i>myBrews</i> is a CLI application for the coffee addict in all of us. Utilizing Ruby and the ActiveRecord gem, it allows users to track coffees they've consumed, rate them, make notes,and even get randomized selections utilizing Ruby's Faker Gem. If you like coffee, this app is for you!</p>
      Built With: <i>Ruby</i>
      <br/>
      <img src={githubIcon} alt="githubIcon" className="icon" onClick={() => this.openRepos()}/>
    </div>)
  }

  renderMet = () => {
    return (
      <div className="descriptionContent">
        <p><i>Virtual Met</i> is a web application allowing users to take procured tours of the prestigious Met 5th Ave Museum. Having been constructed with a JavaScript front end, Ruby on Rails back end, and integrating The Met Collection API, visiters may view various works in up to 6 different departments, accompanied by a thematic playist, and learn as much as they want from the Met Museum's website and archives!</p>
        Built With: <i>JavaScipt, Ruby on Rails</i>
        <br/>
        <img src={metIcon} alt="metIcon" className="icon" id="metProj" onClick={() => this.openRepos()}/>Click <a href="https://virtual-met-front.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a> to check it out!
        <br/>
        <img src={githubIcon} alt="githubIcon" className="icon" onClick={() => this.openRepos()}/>
      </div>
      )
  }

  renderGoodWork = () => {
    return (
      <div className="descriptionContent">
        <p><i>Good Work</i> is a web application designed to help reduce stress and anxiety through goal tracking and partner accountability. Built with a Ruby on Rails back end and React/Redux front end, a <i>Good Work</i> allows users to create and manage goals while integrating a partner for every step of their journey. Any time a goal, list, or task is completed, the app sends out an email congratulating the user and alerting their repsective partner of their accomplishment!</p>
        Built With: <i>React/Redux, Ruby on Rails</i>
        <br/>
        <img src={githubIcon} alt="githubIcon" className="icon"/>
      </div>
      )
  }
  
  render() {
    return (
      <div className="projectContent">
        <h2>{this.state.project}</h2>
        <video className="player" controls>
          {this.state.project === "Virtual Met" ? <source src={metDemo} type="video/mp4" /> : null}
          {this.state.project === "myBrews" ? <source src={myBrewsDemo} type="video/mp4" /> : null}
          {this.state.project === "Good Work" ? <source src={goodWorkDemo} type="video/mp4" /> : null}
        </video>
        <div className="description">
          {this.state.project === "Virtual Met" ? this.renderMet() : null}
          {this.state.project === "myBrews" ? this.renderMyBrews() : null}
          {this.state.project === "Good Work" ? this.renderGoodWork() : null}
        </div>
      </div>
    )
  }
}