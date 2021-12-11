import React from 'react'
import skillIconData from '../../db/skillIcons'
import './skills.scss'

const Skills = () => {
    const renderSkillIcons = () => {
        const keys = Object.keys(skillIconData);
        const imageData = require.context("../../media/icons/")

        const icons = keys.map(key => {
            const { name, alt } = skillIconData[key]
            const image = imageData(`./${name}_icon.png`);
            
            return (
                <img key={key} src={image.default} alt={alt} title={name}className="skillIcon" />
            )
        })
        
        return icons
    }

    return (
        <div className="skillContainer">
            <h1>Skills</h1>
            <div className="iconContainer">
                {renderSkillIcons()}
            </div>
        </div>
    )
}

export default Skills

