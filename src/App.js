import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'

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
          window.location.href = 'https://github.com/p14';
          return null;
        }} />
        <Route path='/medium' exact component={ () => {
          window.location.href = 'https://p14.medium.com';
          return null;
        }} />
        <Route path='/twitter' exact component={ () => {
          window.location.href = 'https://twitter.com/perezident14';
          return null;
        }} />
        <Route path='/instagram' exact component={ () => {
          window.location.href = 'https://instagram.com/perezident14';
          return null;
        }} />
        <Route path='/youtube' exact component={ () => {
          window.location.href = 'https://youtube.com/perezident14';
          return null;
        }} />
        <Route path='/twitch' exact component={ () => {
          window.location.href = 'https://twitch.tv/perezident14';
          return null;
        }} />

      </Switch>
    </Router>
  )
}

export default App