import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/User.css';

class UserPage extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p className="home">
          <Link to="/">Home</Link>
          <Link to="/create">Add Resource</Link>
          <Link to="/resources">My Resources</Link>
        </p>
      </div>
    );
  }
}

export default UserPage;
