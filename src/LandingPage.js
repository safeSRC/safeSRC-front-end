import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.png';
import Categories from './Categories.js';

export default class LandingPage extends Component {

  state = {
    input: '',
    resources: [],
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // const resourcesAPI = await getResources()
  }

  handleInputChange = async (e) => {
    this.setState({ input: e.target.value })
  }

  render() {
    return (
      <div>
        <img className="App-logo" src={logo} alt="safeSRC logo"/>
        <h1>SafeSRC</h1>
        <form>
          <label>
            <input placeholder="Enter state" />
          </label>
          <button>Search</button>
        </form>
        <p>
          A safer, community-based alternative to calling the police in emergency situations
        </p>

      </div>
    )
  }
}
