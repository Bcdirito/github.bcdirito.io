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
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/about"}><li>About</li></Link>
            <Link to={"/projects"}><li>{window.screen.width >= 768 ? "Projects" : "Works"}</li></Link>
            <Link to={"/contact"}><li>Contact</li></Link>
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}

export default NavMenu
