import React, { Component } from 'react'
import metDemo from "../media/videos/virtual_met_demo.mp4"
import myBrewsDemo from "../media/videos/myBrews_demo.mp4"
import goodWorkDemo from "../media/videos/good_work_demo.mp4"

import metIcon from "../media/icons/met_icon.png"
import javaScriptIcon from "../media/icons/javascript_icon.png"
import rubyIcon from "../media/icons/ruby_icon.png"
import railsIcon from "../media/icons/rails_icon.png"
import reactIcon from "../media/icons/react_icon.png"

import "../css/project.css"

export default class Project extends Component {
  state = {
    project: this.props.name,
    language: ""
  }

  enterHandler = e => {
    this.setState({language: e.target.name})
  }

  leaveHandler = () => {
    this.setState({language: ""})
  }

  renderDetailMessage = () => {
    if (this.state.language === "Ruby") return `- This app was built in ${this.state.language}. Click here to visit the Repo!`
    else if (this.state.language === "Ruby on Rails") return `- This back end was built in ${this.state.language}. Click here to visit the Repo!`
    else if (this.state.language === "JavaScript" || this.state.language === "React"){
      return `- This front end was built in ${this.state.language}. Click here to visit the Repo!`
    } else if (this.state.language === "Heroku") return `- ${this.state.project} has been deployed! Click here to check it out!`
  }

  renderMyBrews = () => {
    return (
    <div className="descriptionContent">
      <p><i>myBrews</i> is a CLI application for the coffee addict in all of us. Utilizing Ruby and the ActiveRecord gem, it allows users to track coffees they've consumed, rate them, make notes, and even get randomized selections utilizing Ruby's Faker Gem. If you like coffee, this app is for you!</p>
      <div className="detailMessage">
      <a href="https://github.com/Bcdirito/myBrews" target="_blank" rel="noopener noreferrer"><img src={rubyIcon} alt="rubyIcon" name="Ruby" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a>
      <br/>
      {this.state.language !== "" ? this.renderDetailMessage() : <br/>}
      {navigator.userAgent.includes("Mobile") ? "- Tap an icon to view the Github Repo" : null}
      </div>
    </div>)
  }

  renderMet = () => {
    return (
      <div className="descriptionContent">
        <p><i>Virtual Met</i> is a web application allowing users to take procured tours of the prestigious Met 5th Ave Museum. Having been constructed with a JavaScript front end, a Ruby on Rails back end, and integrating the Met Collection API, visiters may view various works of up to 6 different departments - accompanied by a thematic playist) - and learn as much as they want from the Met Museum's website and archives!</p>
        <br/>
        <div className="detailMessage">
          <a href="https://github.com/Bcdirito/virtual_met_back" target="_blank" rel="noopener noreferrer"><img src={railsIcon} alt="railsIcon" name="Ruby on Rails" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a><a href="https://github.com/Bcdirito/virtual_met_front" target="_blank" rel="noopener noreferrer"><img src={javaScriptIcon} alt="railsIcon" name="JavaScript" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a>{!navigator.userAgent.includes("Mobile") ? <a href="https://virtual-met-front.herokuapp.com" target="_blank" rel="noopener noreferrer"> <img src={metIcon}alt="metIcon" name="Heroku" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a> : null}
          <br/>
          {this.state.language !== "" ? this.renderDetailMessage() : <br/>}
          {navigator.userAgent.includes("Mobile") ? "- Tap an icon to view the Github Repo" : null}
        </div>
      </div>
      )
  }

  renderGoodWork = () => {
    return (
      <div className="descriptionContent">
        <p><i>Good Work</i> is a web application designed to help reduce stress and anxiety through goal tracking and partner accountability. Built with a Ruby on Rails back end and React/Redux front end, <i>Good Work</i> allows users to create and manage goals while connecting them with a partner for every step of their journey. Any time a goal, list, or task is completed, the app sends out an email congratulating the user and alerting their repsective partner of their accomplishment!</p>
        <br/>
        <div className="detailMessage">
          <a href="https://github.com/Bcdirito/good_work_front" target="_blank" rel="noopener noreferrer"> <img src={railsIcon} alt="railsIcon" name="Ruby on Rails" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a><a href="https://github.com/Bcdirito/good_work_back" target="_blank" rel="noopener noreferrer"> <img src={reactIcon} alt="reactIcon" name="React" onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a>
          <br/>
          {this.state.language !== "" ? this.renderDetailMessage() : null}
          {navigator.userAgent.includes("Mobile") ? "- Tap an icon to view the Github Repo" : null}
        </div>
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