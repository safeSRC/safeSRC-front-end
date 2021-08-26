import React, { Component } from 'react';
import ResourceDetail from '../ResourceDetail.js';
import resources from '../../data/resources.js';
import '../../style/Resources.css';

export default class IllnessInjury extends Component {
    state = {
    filteredCategories: 'illness-and-injury',
    filteredCities: '',
  };

  handleCategoriesChange = (event) => {
    this.setState({ filteredCategories: 'illness-and-injury' });
  };

  handleCitiesChange = (event) => {
    this.setState({ filteredCities: event.target.value });
  };

  render() {
    let illinjsrc = resources;

    if (this.state.filteredCategories) {
      illinjsrc = resources.filter(
        illinjsrc => illinjsrc.category === this.state.filteredCategories
      );
    }

    return (
      <div>
        <h1 className="cat-title">Illness & Injury</h1>
        <h2 className="cat-desc">
          Walk-in Urgent Care clinics and nurse lines for minor illness or
          injury that is NOT life-threatening, but needs same-day medical
          attention.
        </h2>
        <section>{resources.src_name}</section>
        <section className="infodump">
          {illinjsrc.map((illinjsrc, i) => (
            <ResourceDetail
              src_name={illinjsrc.src_name}
              tags={illinjsrc.tags}
              src_description={illinjsrc.src_description}
              st_address={illinjsrc.st_address}
              city={illinjsrc.city}
              zip={illinjsrc.zip}
              county={illinjsrc.county}
              usstate={illinjsrc.usstate}
              number={illinjsrc.number}
              altnumber={illinjsrc.altnumber}
              email={illinjsrc.email}
              website={illinjsrc.website}
            />
          ))}
        </section>
      </div>
    );
  }
}
