import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
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
          <ContactContainer />
          <ContentContainer />
      </div>
    );
  }
}


export default withRouter(App);

