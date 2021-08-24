import './App.css';
import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect
} from 'react-router-dom';
import LandingPage from './LandingPage';

export default class App extends Component {


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={
            (routerProps) =>
            <LandingPage {...routerProps} />
          }></Route>
        </Switch>
      </Router>
    )
  }
}
