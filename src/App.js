import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/about' exact component={ About } />
        <Route path='/contact' exact component={ Contact } />
        <Route path='/projects' exact component={ Projects } />

        <Route path='/linkedin' exact component={ () => {
          window.location.href = 'https://linkedin.com/in/perezident14';
          return null;
        }} />
        <Route path='/github' exact component={ () => {
          window.location.href = 'https://github.com/josephdanielperez';
          return null;
        }} />
        <Route path='/medium' exact component={ () => {
          window.location.href = 'https://medium.com/@p14';
          return null;
        }} />
      </Switch>
    </Router>
  )
}

export default App