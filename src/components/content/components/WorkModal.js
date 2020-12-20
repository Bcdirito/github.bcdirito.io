import React, { Component } from 'react'
import Project from "./Project"
import Publication from "./Publication"

import "../css/workModal.css"

export default class WorkModal extends Component {
    renderWorkModal = (data) => {
        if (data.type === "project") return <Project data={data} projectContext={require.context("../../../media/photos/projects")} iconContext={this.props.iconImages} />
        else return <Publication data={this.props.data} context={require.context("../../../media/photos/publications")}/>
    }

    render() {
        return (
            <div id="workModal" onClick={(e) => this.props.exit(e.target.classList)}>
                {this.renderWorkModal(this.props.data)}
            </div>
        )
    }
}
