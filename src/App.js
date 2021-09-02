import './style/App.css';
import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LandingPage from './components/Home.js';
import About from './components/About.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

export default class App extends Component {
  state = {
    token: localStorage.getItem('TOKEN'),

  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => (
            <LandingPage {...routerProps} />
            )}
          />
          <Route
            exact
            path="/about"
            render={(routerProps) => (
              <About {...routerProps} />
            )}
          />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Router>
    );
  }
}
