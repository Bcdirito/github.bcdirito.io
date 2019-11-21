import React, { Component } from 'react'
import "../css/project.css"

export default class Project extends Component {
  state = {
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
    } else if (this.state.language === "Heroku") return `- ${this.props.data.name} has been deployed! Click here to check it out!`
  }
  
  render() {
    const data = this.props.data

    return (
      <div className="projectContent">
        <h2>{data.name}</h2>
        <video className="player" controls>
          <source src={data.video} type="video/mp4" />
        </video>
        <div className="description">
          <div className="descriptionContent">
            <p>{data.description}</p>
            <br/>
            <div className="detailMessage">
              {data.backRepo.link ? <a href={data.backRepo.link} target="_blank" rel="noopener noreferrer"> <img src={data.backRepo.icon} alt="backEndIcon" name={data.backRepo.language} onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a> : null}
              {data.frontRepo.link ? <a href={data.frontRepo.link} target="_blank" rel="noopener noreferrer"> <img src={data.frontRepo.icon} alt="frontEndIcon" name={data.frontRepo.language} onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a> : null}
              {!navigator.userAgent.includes("Mobile") && data.deployment.link ? <a href={data.deployment.link} target="_blank" rel="noopener noreferrer"> <img src={data.deployment.icon} alt="deploymentIcon" name={data.deployment.language} onMouseEnter={e => this.enterHandler(e)} onMouseLeave={() => this.leaveHandler()} /></a> : null}
              <br/>
              <p>{this.state.language !== "" ? this.renderDetailMessage() : <br/>}</p>
              {navigator.userAgent.includes("Mobile") ? "- Tap an icon to view the Github Repo" : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}