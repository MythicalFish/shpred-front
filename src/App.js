import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Video} />
    </Switch>
  </main>
)

export default App
