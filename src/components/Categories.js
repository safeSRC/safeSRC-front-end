import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Categories.css';
// import categories from '../data/categories.js';

export default class Categories extends Component {
  state = {
    filteredCategories: '',
    filteredLocation: '',
    filteredResources: ''
  }

// handleCategoryChange = (event) => {
//   this.setState({
//     filteredCategories: event.target.value,
//   });
// }

  render() {
    return (
      <div className="cats">
        <p className="illness-injury">
          <Link to="/illness-and-injury">
            <button className="ill-inj-btn">
              Illness & Injury
            </button>
          </Link>
          <p className="examples">
            Walk-in Urgent Care clinics and nurse lines for minor illness or
            injury that is NOT life-threatening, but needs same-day medical
            attention, etc.
          </p>
        </p>
        <p className="mental-health">
          <Link to="/mental-health">
            <button className="mh-btn">
              Mental Health
            </button>
          </Link>
          <p className="examples">
            Crisis text/phone/chat-lines, suicide prevention, hospitalization
            services, walk-in programs, wellness checks, same-day therapy
            resources, etc.
          </p>
        </p>
        <p className="substances">
          <Link to="/substances">
            <button className="sub-btn">
              Substances
            </button>
          </Link>
          <p className="examples">
            Poison control, emergency overdose services (narcan, suboxone,
            etc.), substance abuse resources, clean needle share and needle
            disposal locations, etc.
          </p>
        </p>
        <p className="crime-violence">
          <Link to="/crime-and-violence">
            <button className="cv-btn">
              Crime & Violence
            </button>
          </Link>
          <p className="examples">
            Sexual and domestic assault crisis lines and shelters, child
            protection services, crisis lines/shelters/resources for abuse of specific populations, sexual assault reporting advocates, robbery/theft
            reporting, etc.
          </p>
        </p>
        <p className="environ-shelt">
          <Link to="/environment-and-shelter">
            <button className="env-shel-btn">
              Environment & Shelter
            </button>
          </Link>
          <p className="examples">
            Homeless shelters, emergency housing resources, warming/cooling
            shelters, storm shelters, severe weather services, outage maps,
            locksmiths for lockouts, roadside assistance, etc.
          </p>
        </p>
        <p className="animal">
          <Link to="/animal">
            <button className="ani-btn">
              Animal
            </button>
          </Link>
          <p className="examples">
            Emergency vet clinics, after-hours clinics, animal control, wildlife
            rehabilitation centers, animal shelters, lost/found pet resources, etc.
          </p>
        </p>
      </div>
    );
  }
}
