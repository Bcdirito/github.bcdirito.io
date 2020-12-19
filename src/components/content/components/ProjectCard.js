import React from 'react'
import "../css/projectCard.css"

const ProjectCard = (props) => {
  return (
    <div className="projectCard" data-name={props.name} onClick={() => props.select(props.data)}>
      <h3 data-name={props.name}>{props.name}</h3>
      <br/>
      <img data-name={props.name} src={props.context(`./${props.data.card}`)} alt="projectImage"/>
      <br/>
      {!navigator.userAgent.includes("Mobile") ? props.blurb : null}
    </div>
  )
}

export default ProjectCard
