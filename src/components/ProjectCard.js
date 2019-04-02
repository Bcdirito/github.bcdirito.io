import React, { Component } from 'react'

export default class ProjectCard extends Component {
  render() {
    return (
      <div>
        Project cards will have a video demo image.
        Above the image is the title of the project
        When you hover over them, the name appears.
        Clicking on it will make it modal and open a video player
        Underneath will be a one sentence description
      </div>
    )
  }
}
