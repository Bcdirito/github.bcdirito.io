import React, { Component } from 'react'
import metDemo from "../media/videos/virtual_met_demo.mp4"
import myBrewsDemo from "../media/videos/myBrews_demo.mp4"
import goodWorkDemo from "../media/videos/good_work_demo.mp4"
import "../css/project.css"

export default class Project extends Component {
  state = {
    project: this.props.name
  }

  renderMyBrews = () => {
    console.log("inside renderMyBrews")
  }

  renderMet = () => {
    console.log("inside renderMet")
  }

  renderGoodWork = () => {
    console.log("inside renderGoodWork")
  }
  
  render() {
    return (
      <div>
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