import React, { Component } from 'react';
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import ContentContainer from "./components/content/components/ContentContainer"
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Contact />
          <About />
          <Skills />
          {/* <ContentContainer /> */}
      </div>
    );
  }
}


export default App;

