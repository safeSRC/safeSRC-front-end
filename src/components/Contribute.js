import React, { Component } from 'react';

export default class Contribute extends Component {
      render() {
            return (
              <div>
                <p>
                  <a href="/signup" className="link">
                    Sign Up
                  </a>
                </p>
                <p>
                  <a href="/signin" className="link">
                    Sign In
                  </a>
                </p>
                <p>
                  <a href="/userpage" className="link">
                    User Page
                  </a>
                </p>
                <p>
                  <a href="/create" className="link">
                    Add Resource
                  </a>
                </p>
              </div>
            );
      }
}
