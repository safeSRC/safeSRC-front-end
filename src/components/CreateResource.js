import React, { Component } from 'react';
import { createResource } from '../Utils.js';
import '../style/Create.css';

export default class CreateResource extends Component {
  state = {
    src_name: '',
    src_description: '',
    st_address: '',
    city: '',
    city_id: 1,
    county: '',
    zip: '',
    usstate: '',
    state_id: 1,
    number: '',
    altnumber: '',
    email: '',
    website: '',
    category: '',
    category_id: 1,
    tags: '',
  };

  handleSrcNameChange = (e) => {
    this.setState({ src_name: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ src_description: e.target.value });
  };

  handleStAddressChange = (e) => {
    this.setState({ st_address: e.target.value });
  };

  handleCityChange = (e) => {
    this.setState({ city: e.target.value });
  };

  handleZipChange = (e) => {
    this.setState({ zip: e.target.value });
  };

  handleCountyChange = (e) => {
    this.setState({ county: e.target.value });
  };

  handleUSStateChange = (e) => {
    this.setState({ usstate: e.target.value });
  };

  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  handleAltNumberChange = (e) => {
    this.setState({ altnumber: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleWebsiteChange = (e) => {
    this.setState({ website: e.target.value });
  };

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  handleTagsChange = (e) => {
    this.setState({ tags: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    await createResource({
      src_name: this.state.src_name,
      src_description: this.state.src_description,
      st_address: this.state.st_address,
      city: this.state.city,
      city_id: this.state.city_id,
      usstate: this.state.usstate,
      zip: this.state.zip,
      county: this.state.county,
      state_id: this.state.state_id,
      number: this.state.number,
      altnumber: this.state.altnumber,
      email: this.state.email,
      website: this.state.website,
      category: this.state.category,
      category_id: this.state.category_id,
      tags: this.state.tags,
    });

    this.props.history.push('/');
  };

  render() {
    return (
      <div className="detail">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name of Business:
            <input placeholder="Your Business Name" onChange={this.handleSrcNameChange} />
          </label>
          <label>
            Description:
            <input
              value={this.state.src_description}
              type="textarea"
              style={{ height: 100 }}
              placeholder="ex. 24/7 Online chat service with a trained staff member who can provide you confidential crisis support."
              onChange={this.handleDescriptionChange}
            />
          </label>
          <label>
            Street Address:
            <input
              type="address"
              placeholder="1234 Main St, Ste #12"
              onChange={this.handleStAddressChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              placeholder="Anytown"
              onChange={this.handleCityChange}
            />
          </label>
          <label>
            Zipcode:
            <input
              type="number"
              maxLength="5"
              placeholder="12345"
              onChange={this.handleZipChange}
            />
          </label>
          <label>
            County:
            <input
              type="text"
              placeholder="Washington County"
              onChange={this.handleCountyChange}
            />
          </label>
          <label>
            State:
            <input
              type="text"
              placeholder="OR"
              onChange={this.handleUSStateChange}
            />
          </label>
          <label>
            Phone number:
            <input
              type="tel"
              placeholder="612-555-1234"
              onChange={this.handleNumberChange}
            />
          </label>
          <label>
            Alt phone number:
            <input
              type="tel"
              placeholder="800-555-1234"
              onChange={this.handleAltNumberChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              placeholder="contactus@business.org"
              onChange={this.handleEmailChange}
            />
          </label>
          <label>
            Website:
            <input
              type="url"
              placeholder="http://www.yourwebsite.org"
              onChange={this.handleWebsiteChange}
            />
          </label>
          <label>
            Category of Emergency:
            <select
              value={this.state.value}
              onChange={this.handleCategoryChange}
            >
              <option value="ill-inj">Illness & Injury</option>
              <option value="mh">Mental Health</option>
              <option value="sub">Substances</option>
              <option value="cv">Crime & Violence</option>
              <option value="env-shel">Environmental & Shelter</option>
              <option value="ani">Animal</option>
            </select>
          </label>
          <label>
            Tags:
            <input
              type="text"
              placeholder="'Crisis line', 'Animal Control', 'Homeless Shelter', 'Locksmith', etc."
              onChange={this.handleTagsChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
