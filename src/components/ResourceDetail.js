import React, { Component } from 'react';
// import {
//   filterResources
// } from '../Utils.js'; // Remove?
import '../style/Resources.css';
import divider from '../style/divider.png';
import { getOneResource } from '../Utils';

export default class DetailPage extends Component {
  state = {
    src_name: '',
    src_description: '',
    info: [],
    city: '',
    tags: [],
  };

  handleLink = async (e) => {
    e.preventDefault();
    window.location.href = `${this.props.website}`;
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const resource = await getOneResource(id);
    // const cities = await getAllCities();
    // const categories = await getAllCategories();

    this.setState({
      src_name: resource.src_name,
      src_description: resource.src_description,
      st_address: resource.st_address,
      city: resource.city_id,
      info: resource.info,
      tags: resource.tags,
    });
  };

  render() {
    return (
      <div className='detail'>
        <section className='about'>
          <h2 className='city-name'>{this.state.city}</h2>
          <h2 className='biz-name'>{this.state.src_name}</h2>
          <h4 className='tags'>{this.state.tags}</h4>
          <p className='description'>{this.state.src_description}</p>
        </section>

        <section className='info'>
          <p className='info-p'>{this.state.info}</p>
        </section>
        <div className='line'>
          <img className='line-break' src={divider} alt='divider' />
        </div>
      </div>
    );
  }
}
