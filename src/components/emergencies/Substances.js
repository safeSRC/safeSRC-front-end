import React, { Component } from 'react';
import ResourceDetail from '../ResourceDetail.js';
import resources from '../../data/resources.js';
import '../../style/Resources.css';

export default class Substances extends Component {
  state = {
    filteredCategories: 'substances',
    filteredCities: '',
  };

  handleCategoriesChange = (event) => {
    this.setState({ filteredCategories: 'substances' });
  };

  handleCitiesChange = (event) => {
    this.setState({ filteredCities: event.target.value });
  };

  render() {
    let subsrc = resources;

    if (this.state.filteredCategories) {
      subsrc = resources.filter(
        (subsrc) => subsrc.category === this.state.filteredCategories
      );
    }

    return (
      <div>
        <h1 className='cat-title'>Substance Abuse</h1>
        <h2 className='cat-desc'>
          Poison control, emergency overdose services (narcan, suboxone, etc.),
          substance abuse resources, clean needle share and needle disposal
          locations
        </h2>
        <section className='infodump'>
          {subsrc.map((subsrc, i) => (
            <ResourceDetail
              src_name={subsrc.src_name}
              tags={subsrc.tags}
              src_description={subsrc.src_description}
              st_address={subsrc.st_address}
              city={subsrc.city}
              zip={subsrc.zip}
              county={subsrc.county}
              usstate={subsrc.usstate}
              number={subsrc.number}
              altnumber={subsrc.altnumber}
              email={subsrc.email}
              website={subsrc.website}
            />
          ))}
        </section>
      </div>
    );
  }
}
