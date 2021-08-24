import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateResource from './CreateResource.js';

export default class Header extends Component {
      render() {
            return (
              <Router>
                <div>
                  <header>
                    <h1>safeSRC</h1>
                    <Link to="/create">Add a resource</Link>
                  </header>
                  <Switch>
                    <Route
                      path="/create"
                      exact
                      render={(routerProps) => <CreateResource {...routerProps} />}
                    />
                  </Switch>
                </div>
              </Router>
            );
      }
}
