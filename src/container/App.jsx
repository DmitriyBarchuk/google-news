import React, { Component } from 'react'

import NewsSourcesPage from '../pages/NewsSourcesPage'
import Header from '../components/header/Header'



class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <NewsSourcesPage />
      </div>
    );
  }
}

export default App
