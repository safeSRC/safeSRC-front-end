import React, { Component } from 'react';
import ResourceDetail from '../ResourceDetail.js';
import resources from '../../data/resources.js';
import '../../style/Resources.css';

export default class CrimeViolence extends Component {
  state = {
    filteredCategories: 'crime-and-violence',
    filteredCities: '',
  };

  handleCategoriesChange = (event) => {
    this.setState({ filteredCategories: 'crime-and-violence' });
  };

  handleCitiesChange = (event) => {
    this.setState({ filteredCities: event.target.value });
  };

  render() {
    let crimviosrc = resources;

    if (this.state.filteredCategories) {
      crimviosrc = resources.filter(
        crimviosrc => crimviosrc.category === this.state.filteredCategories
      );
    }

    return (
      <div>
        <h1 className="cat-title">Crime & Violence</h1>
        <h2 className="cat-desc">
          Sexual and domestic assault crisis lines and shelters, child
          protection services, crisis lines/shelters/resources for abuse
          (including specified resources for LGBTQ*, disabled, elderly, minor,
          vulnerable adult, and immigrant populations) advocacy for support in
          meeting with police after an assault, safe houses, robbery/theft
          reporting
        </h2>
        <section className="infodump">
          {crimviosrc.map((crimviosrc, i) => (
            <ResourceDetail
              src_name={crimviosrc.src_name}
              tags={crimviosrc.tags}
              src_description={crimviosrc.src_description}
              st_address={crimviosrc.st_address}
              city={crimviosrc.city}
              zip={crimviosrc.zip}
              county={crimviosrc.county}
              usstate={crimviosrc.usstate}
              number={crimviosrc.number}
              altnumber={crimviosrc.altnumber}
              email={crimviosrc.email}
              website={crimviosrc.website}
            />
          ))}
        </section>
      </div>
    );
  }
}
