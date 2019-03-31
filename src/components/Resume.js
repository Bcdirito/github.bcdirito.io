import React, { Component } from 'react'
import resume from "../media/resume.pdf"
import pic from "../media/resume_pic.jpg"
import { Document } from "react-pdf"

export default class Resume extends Component {
  render() {
    return (
      <div className="resumeContent">
        <img className="resume" src={pic} alt="resume" />
        Click <a href={resume} target="_blank" rel="noopener noreferrer">here</a> to download
      </div>
    )
  }
}
