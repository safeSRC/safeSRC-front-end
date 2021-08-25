import React, { Component } from 'react';
import '../style/Categories.css';
// import categories from '../data/categories.js';

export default class Categories extends Component {
  state = {
    filteredCategories: '',
    filteredLocation: '',
    filteredResources: ''
  }

handleCategoryChange = (event) => {
  this.setState({
    filteredCategories: event.target.value,
  });
}

  render() {

    // let emergencies = categories;

    //     if (this.state.filteredCategories) {
    //       emergencies = categories.filter(
    //         emergencies => emergencies.category === +this.state.filteredCategories
    //       );
    //     }

    return (
      <div>
        <p className="illness-injury">
          <button onClick={this.handleCategoryChange}className="ill-inj-btn">Illness & Injury</button>
          <p className="examples">Walk-in Urgent Care clinics and nurse lines for minor illness or injury that is NOT life-threatening, but needs same-day medical attention.
          </p>
        </p>
        <p className="mental-health">
          <button className="mh-btn">Mental Health</button>
          <p className="examples">Crisis text/phone/chat-lines, suicide prevention, hospitalization services, walk-in programs, wellness checks, same-day therapy resources</p>
        </p>
        <p className="substances">
          <button className="sub-btn">Substances</button>
          <p className="examples">Poison control, emergency overdose services (narcan, suboxone, etc.), substance abuse resources, clean needle share and needle disposal locations</p>
        </p>
        <p className="crime-violence">
          <button className="cv-btn">Crime & Violence</button>
          <p className="examples">Sexual and domestic assault crisis lines and shelters, child protection services, crisis lines/shelters/resources for abuse (including specified resources for LGBTQ*, disabled, elderly, minor, vulnerable adult, and immigrant populations) advocacy for support in meeting with police after an assault, safe houses, robbery/theft reporting </p>
        </p>
        <p className="environ-shelt">
          <button className="env-shel-btn">Environmental & Shelter</button>
          <p className="examples">Homeless shelters, emergency housing resources, warming/cooling shelters, storm shelters, severe weather services, outage maps, locksmiths for lockouts, roadside assistance, transportation assistance</p>
        </p>
        <p className="animal">
          <button className="ani-btn">Animal</button>
          <p className="examples">Emergency vet clinics, after-hours clinics, animal control, wildlife rehabilitation centers, animal shelters, lost/found pet resources</p>
        </p>
      </div>
    );
  }
}
