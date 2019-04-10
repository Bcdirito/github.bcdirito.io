import React, { Component } from 'react'
import {Link} from "react-router-dom"

import "../css/menu.css"

class NavMenu extends Component {
  
  state = {
    clicked: false
  }

  render() {
    return (
      <div className="navMenu">
        
      <nav role="navigation">
        <div id="menuToggle">
          
          <input type="checkbox" onClick={() => this.setState({clicked: true})}/>
          
          <span></span>
          <span></span>
          <span></span>
          
        
          <ul id="menu" className={this.state.clicked === true ? "clicked" : "unclicked"}>
            <Link to={"/"}><a><li>Home</li></a></Link>
            <Link to={"/about"}><a><li>About</li></a></Link>
            <Link to={"/resume"}><a><li>Résumé</li></a></Link>
            <Link to={"/projects"}><a><li>Projects</li></a></Link>
            <Link to={"/contact"}><a><li>Contact</li></a></Link>
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}

export default NavMenu
