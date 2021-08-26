import React, { Component } from 'react';
import {
  filterResources
} from '../Utils.js';
import '../style/Resources.css';

export default class DetailPage extends Component {
  state = {
    src_name: '',
    src_description: '',
    st_address: '',
    city: '',
    zip: '',
    county: '',
    usstates: '',
    number: '',
    altnumber: '',
    email: '',
    website: '',
    category: '',
    tags: []
  };

  // componentDidMount = async () => {
  //   const id = this.props.match.params.id;
  //   const resource = await getOneResource(id);
  //   const cities = await getAllCities();
  //   const categories = await getAllCategories();

  //   this.setState({
  //     src_name: resource.src_name,
  //     src_description: resource.src_description,
  //     st_address: resource.st_address,
  //     cities: cities,
  //     zip: resource.zip,
  //     county: resource.county,
  //     number: resource.number,
  //     altnumber: resource.altnumber,
  //     email: resource.number,
  //     website: resource.website,
  //     categories: categories,
  //     tags: resource.tags
  //   });
  // };

  render() {

    return (
      <div className="detail">
        <section className="about">
          <h2 className="biz-name">{this.props.src_name}</h2>
          <h4 className="tags">{this.props.tags}</h4>
          <p className="descrip">{this.props.src_description}</p>
        </section>

        <section className="location">
          <p className="src-address">Street Address: {this.props.st_address}</p>
          <p className="src-address">City: {this.props.city}</p>
          <p className="src-address">Zipcode: {this.props.zip}</p>
          <p className="src-address">County: {this.props.county}</p>
          <p className="src-address">State: {this.props.usstate}</p>
        </section>

        <section className="contact-info">
          <p className="main-phone">Phone Number: {this.props.number}</p>
          <p className="alt-phone">Alt Phone Number: {this.props.altnumber}</p>
          <p className="e-contact">Email: {this.props.number}</p>
          <p className="web-url">Website: {this.props.website}</p>
        </section>
      </div>
    );
  }
}
