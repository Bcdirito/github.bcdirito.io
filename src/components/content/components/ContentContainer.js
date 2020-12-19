import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import SkillContainer from "./SkillContainer"

import "../css/contentContainer.css"

import backArrow  from "../../../media/icons/back_arrow.svg"
import skillIconData from "../../../db/skillIcons"

export default class ContentContainer extends Component {
    render() {
        const iconImages = require.context("../../../media/icons/skills")
        return (
            <div id="contentContainer">
                <div id="portfolioContent">
                    <img src={backArrow} className="icon backArrow hideIcon" alt="Go Back" />
                    <div id="displayContent">
                        {/* <Home /> */}
                        {/* <About /> */}
                        <SkillContainer icons={skillIconData} images={iconImages} />
                    </div>
                </div>
            </div>
        )
    }
}
