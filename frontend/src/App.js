import React, { useState } from 'react'
import './App.css'
import Video, { Blah } from './Video'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom'
import { Button } from '@material-ui/core'


function StatefulButton() {
  const [ wasClicked, setWasClicked ] = useState(false)

  return (
    <>
    <h3>Clicked? {(wasClicked) ? <span style={{color: '#00ff00'}}>Yes</span> : 'No'}</h3>
      <Button color="primary" onClick={() => setWasClicked(true)}>True!</Button>
      <Button color="secondary" onClick={() => setWasClicked(false)}>False!</Button>
    </>
  )
}

const routes = {
  'blah': '/blah',
  'video': '/video',
  'home': '/home'
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>ASDF</h1>
          <ul>
            <li><NavLink activeClassName="activeLink" to={routes.blah}>Blah</NavLink></li>
            <li><NavLink activeClassName="activeLink" to="/video">Video</NavLink></li>
            <li><Link to="/home">Home</Link></li>
          </ul>
          <Switch>
            <Route path={routes.blah}>
              <Blah />
            </Route>
            <Route path="/video">
              <Video name="Insert Movie Name">Blah blahblah</Video>
            </Route>
            <Route path="/home">
              <StatefulButton />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  )
}

export default App
