import React, { Component } from 'react';
import ResourceDetail from '../ResourceDetail.js';
import resources from '../../data/resources.js';

export default class EnvironmentShelter extends Component {
  state = {
    filteredCategories: 'environment-and-shelter',
    filteredCities: '',
  };

  handleCategoriesChange = (event) => {
    this.setState({ filteredCategories: 'environment-and-shelter' });
  };

  handleCitiesChange = (event) => {
    this.setState({ filteredCities: event.target.value });
  };

  render() {
    let enviroshelsrc = resources;

    if (this.state.filteredCategories) {
      enviroshelsrc = resources.filter(
        enviroshelsrc => enviroshelsrc.category === +this.state.filteredCategories
      );
    }

            return (
              <div>
                <h1>Environmental/Housing</h1>
                <h2>
                  Homeless shelters, emergency housing resources,
                  warming/cooling shelters, storm shelters, severe weather
                  services, outage maps, locksmiths for lockouts, roadside
                  assistance, transportation assistance
                </h2>
                <section className="infodump">
                  {enviroshelsrc.map((enviroshelsrc, i) => (
                    <ResourceDetail
                      src_name={enviroshelsrc.src_name}
                      tags={enviroshelsrc.tags}
                      src_description={enviroshelsrc.src_description}
                      st_address={enviroshelsrc.st_address}
                      city={enviroshelsrc.city}
                      zip={enviroshelsrc.zip}
                      county={enviroshelsrc.county}
                      state={enviroshelsrc.state}
                      number={enviroshelsrc.number}
                      altnumber={enviroshelsrc.altnumber}
                      email={enviroshelsrc.email}
                      website={enviroshelsrc.website}
                    />
                  ))}
                </section>
              </div>
            );
      }
}
