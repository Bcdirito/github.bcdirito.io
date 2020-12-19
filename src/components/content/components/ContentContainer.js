import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import "../css/contentContainer.css"

import backArrow  from "../../../media/icons/back_arrow.svg"

export default class ContentContainer extends Component {
    render() {
        return (
            <div id="contentContainer">
                <div id="portfolioContent">
                    <img src={backArrow} className="icon backArrow hideIcon" alt="Go Back" />
                    <div id="displayContent">
                        {/* <Home /> */}
                        <About />
                    </div>
                </div>
            </div>
        )
    }
}
