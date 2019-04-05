import React, { Component } from 'react'
import metDemo from "../media/virtual_met_demo.mp4"

export default class Project extends Component {
  render() {
    return (
      <div>
        <video controls>
          <source src={metDemo} type="video/mp4"></source>
        </video>
      </div>
    )
  }
}
