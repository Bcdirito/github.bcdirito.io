import React, { Component } from 'react';
import ContactContainer from "./components/contact/components/ContactContainer"
import ContentContainer from "./components/content/components/ContentContainer"
import './css/App.css';

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


export default App;

