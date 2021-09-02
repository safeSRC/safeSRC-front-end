import React, { Component } from 'react';
import resources from '../../data/resources.js';
import ResourceDetail from '../ResourceDetail.js';
import '../../style/Resources.css';

export default class Animal extends Component {
  state = {
    filteredCategories: 'animal',
    filteredCities: '',
  };

  handleCategoriesChange = (event) => {
    this.setState({ filteredCategories: 'animal' });
  };

  handleCitiesChange = (event) => {
    this.setState({ filteredCities: event.target.value });
  };

  render() {
    let animalsrc = resources;

    if (this.state.filteredCategories) {
      animalsrc = resources.filter(
        (animalsrc) => animalsrc.category === this.state.filteredCategories
      );
    }

    return (
      <div>
        <h1 className='cat-title'>Animal</h1>
        <h2 className='cat-desc'>
          Emergency vet clinics, after-hours clinics, animal control, wildlife
          rehabilitation centers, animal shelters, lost/found pet animalsrc
        </h2>
        <section className='infodump'>
          {animalsrc.map((animalsrc, i) => (
            <ResourceDetail
              src_name={animalsrc.src_name}
              tags={animalsrc.tags}
              src_description={animalsrc.src_description}
              st_address={animalsrc.st_address}
              city={animalsrc.city}
              zip={animalsrc.zip}
              county={animalsrc.county}
              usstate={animalsrc.usstate}
              number={animalsrc.number}
              altnumber={animalsrc.altnumber}
              email={animalsrc.email}
              website={animalsrc.website}
            />
          ))}
        </section>
      </div>
    );
  }
}
