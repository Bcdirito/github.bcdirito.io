import React, { Component } from 'react'
import resume from "../media/resume.pdf"
import pic from "../media/resume_pic_reduced.jpg"
import "../css/resume.css"

export default class Resume extends Component {
  render() {
    return (
        <div>
            <h1>Resume</h1>
            <div className="resumeContent">
            
            <div className="resumeRender">
                <img className="resume" src={pic} alt="resume" />
            </div>
            <br/>
            <div className="resumeText">
                Click <a href={resume} target="_blank" rel="noopener noreferrer">here</a> to download
            </div>
        </div>
      </div>
    )
  }
}
