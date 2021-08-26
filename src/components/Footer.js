import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

export default class Footer extends Component {
  handleEscape = async (e) => {
    e.preventDefault();
    window.location.href = 'http://www.cnn.com';
  };
  render() {
    return (
      <div>
        <section className="footer">
          <p>
            <a href="/about" className="nav-link">
              About safeSRC
            </a>{' '}
          </p>
          <p>
            <a href="/contribute" className="nav-link">
              Contribute
            </a>
          </p>
          <p>
            <Link to="/categories" className="nav-link">
              Browse Categories
            </Link>
          </p>
          <p>
            <a href="/" onClick={this.props.logout} className="nav-link">
              Log Out
            </a>
          </p>
          <p>
            <button className="escape-btn" onClick={this.handleEscape}>
              Escape Website
            </button>
          </p>
        </section>
      </div>
    );
  }
}
