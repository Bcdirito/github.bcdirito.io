import React, { Component } from 'react'
import Home from './Home'
import ProjectContainer from "./ProjectContainer"
import SkillContainer from "../../skills/Skills"
import LandscapeModal from './LandscapeModal'

import "../css/contentContainer.scss"

import backArrow  from "../media/icons/general/back_arrow.png"
import skillIconData from "../../../db/skillIcons"

export default class ContentContainer extends Component {
    state = {
        componentDisplay: ""
    }

    backToHome = () => {
        this.setState({
            ...this.state,
            componentDisplay: ""
        }, () => {
            document.getElementById("backArrow").classList.toggle("hideIcon")
        })
    }

    selectComponent = (target) => {
        this.setState({
            ...this.state,
            componentDisplay: target.dataset.name
        }, () => {
            document.getElementById("backArrow").classList.toggle("hideIcon")
        })
    }

    renderComponent = () => {
        switch (this.state.componentDisplay) {
            case "works":
                return <ProjectContainer iconImages={require.context("../media/icons/skills")} />
            case "skills":
                return <SkillContainer icons={skillIconData} images={require.context("../media/icons/skills")} />
            default:
                return <Home select={this.selectComponent} />
        }
    }

    render() {
        return (
            <div id="contentContainer">
                <LandscapeModal />
                <div id="portfolioContent">
                    <img src={backArrow} className="icon hideIcon" id= "backArrow" alt="Go Back" onClick={() => this.backToHome()} />
                    <div id="displayContent">
                        {this.renderComponent()}
                    </div>
                </div>
            </div>
        )
    }
}
