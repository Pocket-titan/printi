import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Printer from './components/Printer'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/printi" component={Printer} />
          <Route path="/printi/:printer" component={Printer} />
        </Switch>
      </Router>
    )
  }
}

export default App
