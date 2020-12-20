import React from 'react'
import "../css/publication.css"

const Publication = (props) =>{
    const {data, context} = props
    return (
        <div className="publication">
            <h2>{data.name}</h2>
            <div className="publicationContent">
                <img src={context(`./${data.image}`)} alt="articleImage" className="articleImage" />
                <p className="description">{data.blurb}</p>
                <p>Read Article by Clicking <a href={data.link} target="_blank" rel="noopener noreferrer" className="externalLink">here</a></p>
            </div>
        </div>
    )
}

export default Publication