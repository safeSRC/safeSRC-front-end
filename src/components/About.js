import React, { Component } from 'react';
import '../style/About.css';
import logo from '../style/logo.png';

export default class About extends Component {
      render() {
            return (
              <div>
                <img className="App-logo" src={logo} alt="safeSRC logo" />
                <div className="us">
                  <section className="ben">
                    <h1>Ben</h1>
                    <p className="bio">hi</p>
                  </section>
                  <section className="bri">
                    <h1>Bri</h1>
                    <p className="bio">hey</p>
                  </section>
                  <section className="dimitra">
                    <h1>Dimitra</h1>
                    <p className="bio">hello</p>
                  </section>
                  <section className="elise">
                    <h1>Elise</h1>
                    <p className="bio">henlo</p>
                  </section>
                  <section className="maria">
                    <h1>Maria</h1>
                    <p className="bio">heblo</p>
                  </section>
                  <section className="sofia">
                    <h1>Sofia</h1>
                    <p className="bio">heldo</p>
                  </section>
                </div>
              </div>
            );
      }
}
