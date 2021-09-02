import React, { Component } from 'react';
import ResourceDetail from '../ResourceDetail.js';
import resources from '../../data/resources.js';
import '../../style/Resources.css';

export default class MentalHealth extends Component {
  state = {
    filteredCategories: 'mental-health',
    filteredCities: '',
  };

  handleCategoriesChange = (event) => {
    this.setState({ filteredCategories: 'mental-health' });
  };

  handleCitiesChange = (event) => {
    this.setState({ filteredCities: event.target.value });
  };

  render() {
    let mhsrc = resources;

    if (this.state.filteredCategories) {
      mhsrc = resources.filter(
        (mhsrc) => mhsrc.category === this.state.filteredCategories
      );
    }

    return (
      <div>
        <h1 className='cat-title'>Mental Health</h1>
        <h2 className='cat-desc'>
          Crisis text/phone/chat-lines, suicide prevention, hospitalization
          services, walk-in programs, wellness checks, same-day therapy
          resources
        </h2>
        <section className='infodump'>
          {mhsrc.map((mhsrc, i) => (
            <ResourceDetail
              src_name={mhsrc.src_name}
              tags={mhsrc.tags}
              src_description={mhsrc.src_description}
              st_address={mhsrc.st_address}
              city={mhsrc.city}
              zip={mhsrc.zip}
              county={mhsrc.county}
              usstate={mhsrc.usstate}
              number={mhsrc.number}
              altnumber={mhsrc.altnumber}
              email={mhsrc.email}
              website={mhsrc.website}
            />
          ))}
        </section>
      </div>
    );
  }
}
