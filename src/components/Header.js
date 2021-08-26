import React, { Component } from 'react';
import '../style/Header.css';
import name from '../style/name.png';

export default class Header extends Component {

  render() {
    return (
      <div>
        <header>
            <p>
              <a href="/" className="link">
                <img className="App-name" src={name} alt="Home" />
              </a>
            </p>
        </header>
      </div>
    );
  }
}
