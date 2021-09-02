import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/User.css';
import ResourceDetail from '../components/ResourceDetail.js';
import resources from '../data/resources.js';

class UserPage extends Component {
  render() {
    return (
      <div className='user-page'>
        <p>Welcome, {this.props.name}!</p>
        <p className='home'></p>
        <h3>Your Stuff</h3>
        <br></br>
        <section className='my-stuff'>
          <ResourceDetail
            src_name={resources.src_name}
            tags={resources.tags}
            src_description={resources.src_description}
            st_address={resources.st_address}
            city={resources.city}
            zip={resources.zip}
            county={resources.county}
            state={resources.state}
            number={resources.number}
            altnumber={resources.altnumber}
            email={resources.email}
            website={resources.website}
          />
        </section>
        <br></br>
        <section>
          <Link to='/create'>Add Resource</Link>
        </section>
      </div>
    );
  }
}

export default UserPage;
