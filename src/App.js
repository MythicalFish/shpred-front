import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'
import './App.css'

const App = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:id" component={VideoPage} />
      </Switch>
    </main>
  )
}

export default App
