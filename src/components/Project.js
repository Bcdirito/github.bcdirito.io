import React, { Component } from 'react'
import metDemo from "../media/videos/virtual_met_demo.mp4"
import myBrewsDemo from "../media/videos/myBrews_demo.mp4"
import goodWorkDemo from "../media/videos/good_work_demo.mp4"

export default class Project extends Component {
  state = {
    project: this.props.project
  }

  renderMyBrews = () => {

  }

  renderMet = () => {

  }

  renderGoodWork = () => {
    
  }
  render() {
    return (
      <div>
        <video controls>
          {/* <source src={metDemo} type="video/mp4" /> */}
          <source src={myBrewsDemo} type="video/mp4" />
          {/* <source src={goodWorkDemo} type="video/mp4" /> */}
        </video>
      </div>
    )
  }
}