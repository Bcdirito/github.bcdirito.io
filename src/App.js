import React, { Component } from 'react';
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Contact />
          <About />
          <Skills />
      </div>
    );
  }
}


export default App;

