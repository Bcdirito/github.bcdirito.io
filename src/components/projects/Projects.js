import React from 'react'
import './projects.scss'

const Projects = () => (
    <div className="projectsContainer">
        <h1>Projects</h1>
        <ul>
            <li>
                <h2>
                    <a href="https://separate-field-foxtail.glitch.me/" target="_blank" rel="noopener noreferrer">Moodsic</a>
                </h2>
                <p>Mood quiz & playlist recommendation</p>
            </li>
            <li>
                <h2>
                    <a href="https://mars-resource-card.web.app/" target="_blank" rel="noopener noreferrer">Terraforming Mars Card</a>
                </h2>
                <p>Companion app to manage your resources</p>
            </li>
        </ul>
    </div>
)


export default Projects