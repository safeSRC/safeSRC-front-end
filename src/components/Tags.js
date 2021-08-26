import React, { Component } from 'react';
import '../style/Tags.css';

export default class Tags extends Component {
  handleTagsChange = (e) => {
    this.setState({ tags: e.target.value });
  };
  render() {
    return (
      <div className="tag-box">
        <section className="tag-options">
          <p className="lgbtq">
            <input
              type="checkbox"
              name="lgbtq"
              value="LGBTQ*"
              onChange={this.handleTagsChange}
            />
            <label>LGBTQ*</label>
          </p>
          <p className="elderly">
            <input
              type="checkbox"
              name="elderly"
              value="Elderly Services"
              onChange={this.handleTagsChange}
            />
            <label>Elderly Services</label>
          </p>
          <p className="vulnerableadult">
            <input
              type="checkbox"
              name="vulnerableadult"
              value="Vulnerable Adult"
              onChange={this.handleTagsChange}
            />
            <label>Vulnerable Adult</label>
          </p>
          <p className="children">
            <input
              type="checkbox"
              name="children"
              value="Children"
              onChange={this.handleTagsChange}
            />
            <label>Children</label>
          </p>
          <p className="immigrant">
            <input
              type="checkbox"
              name="immigrant"
              value="Immigrant"
              onChange={this.handleTagsChange}
            />
            <label>Immigrant</label>
          </p>
          <p className="disability">
            <input
              type="checkbox"
              name="disability"
              value="Disability"
              onChange={this.handleTagsChange}
            />
            <label>Disability</label>
          </p>
          <p className="24-7">
            <input
              type="checkbox"
              name="24-7"
              value="Available 24/7"
              onChange={this.handleTagsChange}
            />
            <label>Available 24/7</label>
          </p>
          <p className="esl">
            <input
              type="checkbox"
              name="esl"
              value="Multilingual"
              onChange={this.handleTagsChange}
            />
            <label>Multilingual</label>
          </p>
          <p className="women">
            <input
              type="checkbox"
              name="women"
              value="Women Only"
              onChange={this.handleTagsChange}
            />
            <label>Women Only</label>
          </p>
          <p className="walk-in">
            <input
              type="checkbox"
              name="walk-in"
              value="Walk-in"
              onChange={this.handleTagsChange}
            />
            <label>Walk-in</label>
          </p>
          <p className="pet-friendly">
            <input
              type="checkbox"
              name="pet-friendly"
              value="Pet-friendly"
              onChange={this.handleTagsChange}
            />
            <label>Pet-friendly</label>
          </p>
          <p className="vaccination-mask">
            <input
              type="checkbox"
              name="vaccination-mask"
              value="Vaccination/Mask Required"
              onChange={this.handleTagsChange}
            />
            <label>Vaccination/Mask Required</label>
          </p>
        </section>
      </div>
    );
  }
}
