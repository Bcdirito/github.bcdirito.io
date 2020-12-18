import React from 'react'
import '../css/photoContainer.css'

const PhotoContainer = (props) => {
    return (
        <div id="photoContainer">
            <img src={props.photo} id="contactPhoto" />
        </div>
    )
}

export default PhotoContainer