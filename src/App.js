import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid/ImageGrid';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ImageGrid />
      </div>
    );
  }
}

export default App;
