import React, { Component } from 'react'

import "../css/home.css"
// import "../css/menu.css"

export default class Home extends Component {
  render() {
    return (
        <div className="homePage">
          <h1 className="contentHeader">Welcome!</h1>
            <div className="homeContent">
                <div className="homeText">
                  <p className="visitPage">ABOUT ME</p>
                  <p className="visitPage">WORKS</p>
                  <p className="visitPage">SKILLS</p>
                </div>
            </div>
        </div>
    )
  }
}