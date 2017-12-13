import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Roland Augusto Castillo</h1>
        <h3 className="App-subtitle">Frontend Engineer</h3>
        <p className="App-intro">
          Based in Berlin, working mostly with React JS, exploring React Native
        </p>
        <ul className="links">
          <li><a className="link" href="https://www.linkedin.com/in/rolandcastillo/">LinkedIn</a></li>
          <li><a className="link" href="https://www.github.com/rolandaugusto/">Github</a></li>
          <li><a className="link" href="https://twitter.com/rolandaugusto">@rolandaugusto</a></li>
        </ul>
      </div>
    );
  }
}

export default App;
