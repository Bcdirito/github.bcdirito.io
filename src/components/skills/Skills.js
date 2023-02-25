import React from 'react'
import javascript from '../../media/icons/javascript_icon.png'
import typescript from '../../media/icons/typescript_icon.png'
import react from '../../media/icons/react_icon.png'
import graphQL from '../../media/icons/graphQL_icon.png'
import node from '../../media/icons/node_icon.png'
import golang from '../../media/icons/golang_icon.png'
import python from '../../media/icons/python_icon.png'
import django from '../../media/icons/django_icon.png'
import ruby from '../../media/icons/ruby_icon.png'
import rails from '../../media/icons/rails_icon.png'
import html from '../../media/icons/html_icon.png'
import css from '../../media/icons/css_icon.png'
import './skills.scss'

const Skills = () => (
    <div className="skillContainer">
        <h1>Skills</h1>
        <div className="iconContainer">
            <img src={javascript} alt="javascript_icon" title="JavaScript" className="skillIcon" />
            <img src={typescript} alt="typescript_icon" title="TypeScript" className="skillIcon" />
            <img src={react} alt="react_icon" title="React" className="skillIcon" />
            <img src={golang} alt="golang_icon" title="Golang" className="skillIcon" />
            <img src={ruby} alt="ruby_icon" title="Ruby" className="skillIcon" />
            <img src={rails} alt="rails_icon" title="Ruby on Rails" className="skillIcon" />
            <img src={graphQL} alt="graphQL_icon" title="GraphQL" className="skillIcon" />
            <img src={node} alt="node_icon" title="Node" className="skillIcon" />
            <img src={python} alt="python_icon" title="Python" className="skillIcon" />
            <img src={django} alt="django_icon" title="Django" className="skillIcon" />
            <img src={html} alt="html_icon" title="HTML5" className="skillIcon" />
            <img src={css} alt="css_icon" title="CSS3" className="skillIcon" />
        </div>
    </div>
)

export default Skills

