import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import NavMenu from "./components/NavMenu"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import ProjectContainer from "./components/ProjectContainer"
import './css/App.css';
import "./css/menu.css"

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
        <NavMenu />
          <Switch>
            <Route exact path="/" render={(props) => (
              <Home {...props}/>
              )}/>
            <Route exact path="/about" render={(props) => (
              <About {...props}/>
            )}/>
            <Route exact path="/contact" render={(props) => (
              <Contact {...props}/>
            )}/>
            <Route exact path="/projects" render={(props) => (
              <ProjectContainer {...props}/>
            )}/>
            <Route component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;

