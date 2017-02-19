import React, { Component } from 'react'
import logo from '../components/logo.svg'
import './App.css'

import NewsSourcesPage from '../pages/NewsSourcesPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Yo to React 13213</h2>
        </div>
        <p className="App-intro">
          <NewsSourcesPage />
        </p>
      </div>
    );
  }
}

export default App
