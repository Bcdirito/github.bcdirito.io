import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import { connect } from "react-redux"
import Home from "./components/Home"
import About from "./components/About"
import NoMatch from "./components/NoMatch"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Brian DiRito - Full Stack Developer</h2>
        <Switch>
          <Route exact path="/" render={(props) => (
            <Home {...props}/>
            )}/>
          <Route exact path="/about" render={(props) => (
            <About {...props}/>
          )}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}


export default withRouter(App);

