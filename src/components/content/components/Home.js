import React, { Component } from 'react'

import "../css/home.css"

export default class Home extends Component {
  render() {
    return (
        <div className="homePage">
          <h1 className="contentHeader">Welcome!</h1>
            <div className="homeContent">
                <div className="homeText">
                  <p className="visitPage" data-name="about" onClick={(e) => this.props.select(e.target)}>ABOUT ME</p>
                  <p className="visitPage" data-name="works" onClick={(e) => this.props.select(e.target)}>WORKS</p>
                  <p className="visitPage" data-name="skills" onClick={(e) => this.props.select(e.target)}>SKILLS</p>
                </div>
            </div>
        </div>
    )
  }
}