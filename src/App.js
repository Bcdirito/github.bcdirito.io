import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import { connect } from "react-redux"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import ProjectContainer from "./components/ProjectContainer"
import Navbar from "./components/Navbar"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
        <Navbar />
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


export default withRouter(App);

