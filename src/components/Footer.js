import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';


export default class Footer extends Component {
      render() {
            return (
              <div>
                <p className="footer">
                  <p className="add-link">
                    <Link to="/create">Add a resource</Link>
                  </p>
                  <p className="logo">safeSRC</p>
                </p>
              </div>
            );
      }
}
