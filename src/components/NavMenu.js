import React, { Component } from 'react'
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
            <a href="/"><li>Home</li></a>
            <a href="/about"><li>About</li></a>
            <a href="/resume"><li>Résumé</li></a>
            <a href="/projects"><li>Projects</li></a>
            <a href="/contact"><li>Contact</li></a>
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}

export default NavMenu
