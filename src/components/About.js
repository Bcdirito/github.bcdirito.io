import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About Me</h1>
        <div className="aboutContent">
          <p>First paragraph about growing up through college</p>
          <p>Second paragraph about transition</p>
          <p>Third Paragraph about Flatiron/developer life</p>
        </div>
      </div>
    )
  }
}
