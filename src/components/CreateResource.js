import React, { Component } from 'react';
import { createResource } from '../Utils.js';
import '../style/Create.css';

export default class CreateResource extends Component {
  state = {
    src_name: '',
    src_description: '',
    st_address: '',
    city: '',
    county: '',
    zip: '',
    usstate: '',
    number: '',
    altnumber: '',
    email: '',
    website: '',
    category: '',
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
      zip: this.state.zip,
      county: this.state.county,
      usstate: this.state.usstate,
      number: this.state.number,
      altnumber: this.state.altnumber,
      email: this.state.email,
      website: this.state.website,
      category: this.state.category,
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
          <input
            className="input-field"
            placeholder="ex. People First Mental Health Services" onChange={this.handleSrcNameChange} />
          </label>
          <label>
            Description:
            <input
              className="input-field"
              value={this.state.src_description}
              type="textarea"
              style={{ height: 100 }}
              placeholder="ex. 24/7 crisis line for domestic violence support"
              onChange={this.handleDescriptionChange}
            />
          </label>
          <label>
            Street Address:
            <input
              className="input-field"
              type="address"
              placeholder="1234 Main St, Ste #12"
              onChange={this.handleStAddressChange}
            />
          </label>
          <label>
            City:
            <input
              className="input-field"
              type="text"
              placeholder="Anytown"
              onChange={this.handleCityChange}
            />
          </label>
          <label>
            Zipcode:
            <input
              className="input-field"
              type="number"
              maxLength="5"
              placeholder="12345"
              onChange={this.handleZipChange}
            />
          </label>
          <label>
            County:
            <input
              className="input-field"
              type="text"
              placeholder="Washington County"
              onChange={this.handleCountyChange}
            />
          </label>
          <label>
            State:
            <input
              className="input-field"
              type="text"
              placeholder="OR"
              onChange={this.handleUSStateChange}
            />
          </label>
          <label>
            Phone number:
            <input
              className="input-field"
              type="tel"
              placeholder="612-555-1234"
              onChange={this.handleNumberChange}
            />
          </label>
          <label>
            Alt phone number:
            <input
              className="input-field"
              type="tel"
              placeholder="1-800-555-1234"
              onChange={this.handleAltNumberChange}
            />
          </label>
          <label>
            Email:
            <input
              className="input-field"
              type="email"
              placeholder="contactus@business.org"
              onChange={this.handleEmailChange}
            />
          </label>
          <label>
            Website:
            <input
              className="input-field"
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
              className="input-field"
              type="text"
              placeholder="ex. 'Crisis line', 'Wildlife Rehab', 'Locksmith', etc."
              onChange={this.handleTagsChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
