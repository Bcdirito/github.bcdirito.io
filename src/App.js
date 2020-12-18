import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import NavMenu from "./components/NavMenu"
import Home from "./components/Home"
import About from "./components/About"
import ProjectContainer from "./components/ProjectContainer"
import Contact from "./components/Contact"
import ContactContainer from "./components/contact/components/ContactContainer"
import ContentContainer from "./components/content/components/ContentContainer"
import './css/App.css';
import './css/menu.css';

class App extends Component {

  state = {
    component: ""
  }


  render() {
    return (
        <div className="App">
        {/* <NavMenu/>
          <Switch>
            <Route exact path="/" render={(props) => (
              <Home {...props}/>
              )}/>
            <Route exact path="/about"render={(props) => (
              <About {...props}/>
            )}/>
            <Route exact path="/projects" render={(props) => (
              <ProjectContainer {...props}/>
            )}/>
            <Route exact path="/contact" render={(props) => (
              <Contact {...props}/>
            )}/>
            <Route component={Home} />
          </Switch> */}
          <ContactContainer />
          <ContentContainer />
      </div>
    );
  }
}


export default withRouter(App);

