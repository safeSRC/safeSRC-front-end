import React, { Component } from 'react';
import logo from '../style/logo.png';
import '../style/Home.css';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  state = {
    input: '',
    resources: [],
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.history.push('/categories');
    // const resourcesAPI = await getResources()
  }

  handleInputChange = async (e) => {
    this.setState({ input: e.target.value })
  }

  render() {
    return (
      <div>
        <img className="App-logo" src={logo} alt="safeSRC logo" />
        <h1>SafeSRC</h1>
        <form>
          <label>
            <input placeholder="Enter city" />
          </label>
          <button onSubmit={this.handleSubmit}>
            <Link to="/categories">Search</Link>
          </button>
        </form>
        <p>
          A safer, community-based alternative to calling the police in
          emergency situations
        </p>
      </div>
    );
  }
}
