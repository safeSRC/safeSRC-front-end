import React, { Component } from 'react';
import {
  getAllCities,
  getAllCategories,
  getOneResource,
  updateResource,
  deleteResource,
} from '../Utils.js';
import '../style/Resources.css';

export default class DetailPage extends Component {
  state = {
    src_name: '',
    st_address: '',
    cities: [],
    city_id: 1,
    zip: '',
    county: '',
    usstates: [],
    state_id: 1,
    number: '',
    altnumber: '',
    email: '',
    website: '',
    categories: [],
    category_id: 1,
    tags: [],
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const resource = await getOneResource(id);
    const cities = await getAllCities();
    const categories = await getAllCategories();

    this.setState({
      src_name: resource.src_name,
      st_address: resource.st_address,
      city_id: resource.city_id,
      cities: cities,
      zip: resource.zip,
      county: resource.county,
      state_id: resource.state_id,
      number: resource.number,
      altnumber: resource.altnumber,
      email: resource.number,
      website: resource.website,
      category_id: resource.category_id,
      categories: categories,
      subcategory: resource.subcategory,
    });
  };

  handlesrc_nameChange = (e) => {
    this.setState({ src_name: e.target.value });
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

  handleDelete = (e) => {
    // this.setState({ gender_id: e.target.reset() });
    deleteResource(this.props.match.params.id);
    this.props.history.push('/');
    window.location.reload();
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await updateResource(this.props.match.params.id, {
      src_name: this.state.src_name,
      st_address: this.state.st_address,
      city: this.state.city,
      city_id: this.state.city_id,
      zip: this.state.zip,
      county: this.state.county,
      usstate: this.state.usstate,
      state_id: this.state.state_id,
      number: this.state.number,
      altnumber: this.state.altnumber,
      email: this.state.email,
      website: this.state.website,
      category: this.state.category,
      category_id: this.state.category_id,
      subcategory: this.state.subcategory,
      owner_id: 1,
    });
    this.props.history.push('/');
  };
  render() {
    console.log(this.state);
    return (
      <div className="detail">
        <h2>Update Resource</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Business Name
            <input
              value={this.state.name}
              type="text"
              onChange={this.handleSrcNameChange}
            />
          </label>
          <label>
            Street Address
            <input
              value={this.state.st_address}
              type="address"
              onChange={this.handleStAddressChange}
            />
          </label>
          <label>
            City
            <select onChange={this.handleCityChange}>
              {this.state.cities.map((city) => (
                <option
                  selected={city.id === this.state.city_id}
                  value={city.id}
                >
                  {city.city}
                </option>
              ))}
              <option>select</option>
            </select>
          </label>
          <label>
            Zipcode
            <input
              value={this.state.zip}
              type="number"
              maxLength="5"
              onChange={this.handleZipChange}
            />
          </label>
          <label>
            County
            <input
              value={this.state.county}
              type="county"
              onChange={this.handleCountyChange}
            />
          </label>
          <label>
            State
            <select onChange={this.handleUSStateChange}>
              {this.state.usstates.map((usstate) => (
                <option
                  selected={usstate.id === this.state.state_id}
                  value={usstate.id}
                >
                  {usstate.usstate}
                </option>
              ))}
              <option>select</option>
            </select>
          </label>
          <label>
            Phone number:
            <input
              value={this.state.number}
              type="tel"
              onChange={this.handleNumberChange}
            />
          </label>
          <label>
            Alt phone number:
            <input
              value={this.state.altnumber}
              type="tel"
              onChange={this.handleAltNumberChange}
            />
          </label>
          <label>
            Email:
            <input
              value={this.state.email}
              type="email"
              onChange={this.handleEmailChange}
            />
          </label>
          <label>
            Website:
            <input
              value={this.state.website}
              type="url"
              onChange={this.handleWebsiteChange}
            />
          </label>

          <label>
            Resource Category
            <select onChange={this.handleCategoryChange}>
              {this.state.categories.map((category) => (
                <option
                  selected={category.id === this.state.category_id}
                  value={category.id}
                >
                  {category.category}
                </option>
              ))}
              <option>select</option>
            </select>
          </label>
          <button className="update-btn">Update</button>
        </form>

        <button onClick={this.handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    );
  }
}
