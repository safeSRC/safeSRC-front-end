import React, { Component } from 'react';
import { getAllResources } from '../Utils.js';
import { Link } from 'react-router-dom';
import '../style/Resources.css';
import resources from '../data/resources.js';

export default class ListPage extends Component {
  state = {
    resources: [],
  };

  componentDidMount = async () => {
    const resourceslist = await getAllResources();
    this.setState({resources: resourceslist});
  };

  render() {
    return (
      <div className="resourceslist">
        {this.state.resources.map(resources => 
          <Link to={`/resources/${resources.id}`}>
            <div className="resources-info">
              <h2 className="name">{resources.src_name}</h2>
              <h3 className="category">{resources.category}</h3>
              <h4 className="tags">{resources.tags}</h4>
              <p className="description">{resources.src_description}</p>
              <section className="resources-address">
                <p className="street-add">{resources.st_address}</p>
                <p className="city">{resources.city}</p>
                <p className="zip">{resources.zip}</p>
                <p className="county">{resources.county}</p>
                <p className="usstate">{resources.usstate}</p>
              </section>
              <section className="contact-info">
                <p className="phone-numbers">
                  Phone numbers: <p className="number1">{resources.number}</p>,
                  <p className="altnumber">{resources.altnumber}</p>
                </p>
                <p className="email">Email: {resources.email}</p>
                <p className="website">Website: {resources.website}</p>
              </section>
            </div>
          </Link>
        )}
      </div>
    );
  }
}
