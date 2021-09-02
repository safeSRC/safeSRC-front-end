import React, { Component } from 'react';
import logo from '../style/logo.png';
import '../style/Home.css';
import { getResourcesByCityName } from '../Utils';
// import { Link } from 'react-router-dom';

export default class Home extends Component {
  state = {
    input: '',
    resources: [],
    message: '',
    city: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.input);
    const res = await getResourcesByCityName(this.state.input);
    console.log(res);
    if (res.resources) {
      this.setState({ resources: res.resources, city: res.city.city });
    } else {
      this.setState({ message: res.message, resources: [], city: '' });
    }

    // this.props.history.push('/resources');
    // const resourcesAPI = await getResources()
  };

  handleInputChange = async (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div>
        <img className='App-logo' src={logo} alt='safeSRC logo' />
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              onChange={this.handleInputChange}
              value={this.state.input}
              placeholder='Enter city'
            />
          </label>
          <button type='submit' className='search-button'>
            Search
          </button>
        </form>
        <div>
          {this.state.resources.length
            ? this.state.resources.map((resource) => (
                <div>
                  <h1>{resource.src_name}</h1>
                  <p>{resource.src_description}</p>
                  <p>{resource.info}</p>
                </div>
              ))
            : this.state.message}
        </div>
        <p className='paragraph' id='results'>
          A safer, community-based alternative to calling the police in
          emergency situations.
        </p>
      </div>
    );
  }
}
