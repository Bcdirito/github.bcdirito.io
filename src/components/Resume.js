import React, { Component } from 'react'
import resume from "../media/pdfs/resume.pdf"
import pic from "../media/photos/resume_pic.jpg"
import "../css/resume.css"

export default class Resume extends Component {
  render() {
    return (
        <div>
            <h1>Résumé</h1>
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
