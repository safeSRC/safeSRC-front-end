import React, { Component } from 'react'

export default class CrimeViolence extends Component {
      render() {
            return (
              <div>
                <h1>Crime & Violence</h1>
                <h2>
                  Sexual and domestic assault crisis lines and shelters, child
                  protection services, crisis lines/shelters/resources for abuse
                  (including specified resources for LGBTQ*, disabled, elderly,
                  minor, vulnerable adult, and immigrant populations) advocacy
                  for support in meeting with police after an assault, safe
                  houses, robbery/theft reporting
                </h2>
                <h3>{this.props.src_name}</h3>
                <p>{this.props.tags}</p>
                <p>{this.props.src_description}</p>
                <p className="address">
                  Address:
                  <p>{this.props.st_address}</p>
                  <p>{this.props.city}</p>
                  <p>{this.props.zip}</p>
                  <p>{this.props.county} County</p>
                </p>
                <p className="contact-info">
                  <p>Phone number: {this.props.number}</p>
                  <p>Alternate phone number: {this.props.altnumber}</p>
                  <p>Email: {this.props.email}</p>
                  <p>Website: {this.props.website}</p>
                </p>
              </div>
            );
      }
}
