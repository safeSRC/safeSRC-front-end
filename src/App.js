import './style/App.css';
import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import ResourceList from './components/ResourceList.js';
import ResourceDetail from './components/ResourceDetail.js';
import CreateResource from './components/CreateResource.js';
import LandingPage from './components/Home.js';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Logout from './components/Logout.js';
import About from './components/About.js';
import UserPage from './components/UserPage.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Categories from './components/Categories.js';

export default class App extends Component {
  state = {
    token: localStorage.getItem('TOKEN'),
    display_name: '',
  };

  signin = (token) => {
    this.setState({ token });
    localStorage.setItem('TOKEN', token);
  };

  logout = () => {
    this.setState({ token: '' });
    localStorage.setItem('TOKEN', '');
  };

  setUserName = (display_name) => {
    this.setState({ display_name: display_name });
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => <LandingPage {...routerProps} />}
          />
          <Route
            exact
            path="/categories"
            render={(routerProps) => (
              <Categories {...routerProps} />
            )}
          />
          <Route
            exact
            path="/signin"
            render={(routerProps) => (
              <Signin signin={this.signin} {...routerProps} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={(routerProps) => (
              <Signup
                signin={this.signin}
                setUserName={this.setUserName}
                {...routerProps}
              />
            )}
          />
          <Route
            exact
            path="/logout"
            render={(routerProps) => (
              <Logout signin={this.logout} {...routerProps} />
            )}
          />
          <Route
            exact
            path="/about"
            render={(routerProps) => (
              <About signin={this.signin} {...routerProps} />
            )}
          />
          <Route
            exact
            path="/resources"
            render={(routerProps) => <ResourceList {...routerProps} />}
          />
          <Route
            exact
            path="/resources/:id"
            render={(routerProps) => <ResourceDetail {...routerProps} />}
          />
          <Route
            exact
            path="/create"
            render={(routerProps) => <CreateResource {...routerProps} />}
          />
          <Route
            path="/userpage"
            exact
            render={(routerProps) =>
              this.state.token ? (
                <UserPage
                  {...routerProps}
                  token_key={this.state.token}
                  name={this.state.display_name}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Router>
    );
  }
}
