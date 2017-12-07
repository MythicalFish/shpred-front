import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import './style.css'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Link to="/video">Video</Link>
        </p>
      </div>
    )
  }
}

export default Home
