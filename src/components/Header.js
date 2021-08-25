import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

export default class Header extends Component {
      render() {
            return (
              <div>
                <header>
                  <div className="nav-links">
                    <p className="home-link">
                      <Link to="/">Home</Link>
                    </p>
                    <p className="signin-link">
                      <Link to="/signin">Sign In</Link>
                    </p>
                    <p className="signup-link">
                      <Link to="/signup">Sign Up</Link>
                    </p>
                    <p className="about-link">
                      <Link to="/about">About Us</Link>{' '}
                    </p>
                    <p className="logout-link">
                      <a
                        href="/"
                        onClick={this.props.logout}
                        className="logout-link"
                      >
                        Log Out{' '}
                      </a>
                    </p>
                  </div>
                </header>
              </div>
            );
      }
}
