import React, { Component } from 'react';
import { getAllResources } from '../Utils.js';
import { Link } from 'react-router-dom';
import '../style/Resources.css';
// import resources from '../data/resources.js';

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
          <Link key={resources.id} to={`/resources/${resources.id}`}>
            <div className="resources-info">
              <h2 className="name">{resources.src_name}</h2>
              <h3 className="category">{resources.category}</h3>
              <h4 className="tags">{resources.tags}</h4>
              <p className="description">{resources.src_description}</p>
              <section className="resources-address">
                <p className="info">{resources.info}</p>
                <p className="city">{resources.city}</p>
              </section>
            </div>
          </Link>
        )}
      </div>
    );
  }
}
