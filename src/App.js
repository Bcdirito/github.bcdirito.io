import React, { Component } from 'react';
import ContactContainer from "./components/contact/components/ContactContainer"
import ContentContainer from "./components/content/components/ContentContainer"
import './App.scss';

class App extends Component {
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

