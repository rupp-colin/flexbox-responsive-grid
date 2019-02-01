import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="container">
        <h1>Flex-box Responsive Grid</h1>
        <p>this a responsive 12 column grid</p>
        <div className="row">
          <div className="col-3">3</div>
          <div className="col-3">3</div>
          <div className="col-3">3</div>
          <div className="col-3">3</div>
          <div className="col-4">4</div>
          <div className="col-4">4</div>
          <div className="col-4">4</div>
          <div className="col-6">6</div>
          <div className="col-6">6</div>
          <div className="col-12">12</div>
        </div>
        <h1>Another view</h1>
        <p>try resizing the page to view breakpoints</p>
        <div className="row">
          <div className="col-12">12</div>
          <div className="col-6">6</div>
          <div className="col-6">6</div>
          <div className="col-4">4</div>
          <div className="col-4">4</div>
          <div className="col-4">4</div>
          <div className="col-3">3</div>
          <div className="col-3">3</div>
          <div className="col-3">3</div>
          <div className="col-3">3</div>
        </div>
      </main>
    );
  }
}

export default App;
