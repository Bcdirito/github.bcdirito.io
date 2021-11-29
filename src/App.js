import React, { Component } from 'react';
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Contact />
          <About />
          <Projects />
          <Skills />
      </div>
    );
  }
}


export default App;

