import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import { connect } from "react-redux"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="header">Brian DiRito - Full Stack Developer</h2>
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
            <Projects {...props}/>
          )}/>
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}


export default withRouter(App);

