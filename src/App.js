import './App.css';
import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect
} from 'react-router-dom';
import ResourceList from './ResourceList.js';
import ResourceDetail from './ResourceDetail.js';
import CreateResource from './CreateResource.js';
import LandingPage from './LandingPage';

export default class App extends Component {


  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => <LandingPage {...routerProps} />}
          ></Route>
          <Route
            exact
            path="/resources"
            render={(routerProps) => <ResourceList {...routerProps} />}
          ></Route>
          <Route
            exact
            path="/resources/:id"
            render={(routerProps) => <ResourceDetail {...routerProps} />}
          ></Route>
          <Route
            exact
            path="/create"
            render={(routerProps) => <CreateResource {...routerProps} />}
          ></Route>
        </Switch>
      </Router>
    );
  }
}
