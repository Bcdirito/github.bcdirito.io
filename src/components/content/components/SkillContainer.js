import React, { Component } from 'react'

export default class SkillContainer extends Component {
    renderSkillIcons(iconData, imageData) {
        const icons = []
        
        for (const key in iconData) {
            const icon = iconData[key]
            icons.push(<img key={key} src={imageData(`./${icon.name}_icon.png`)} alt={icon.alt} className="skillIcon" />)
        }
        
        return icons
    }

    render() {
        return (
            <div id="skillContainer">
                <h1 className="contentHeader">Skills</h1>
                {this.renderSkillIcons(this.props.icons, this.props.images)}
            </div>
        )
    }
}

