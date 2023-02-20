import React, { Component } from "react";

import uuid from "react-uuid";

import "./ContactForm.css";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      id: uuid(),
      name: "",
      surname: "",
      phone: "",
    };
  }

  handleAllChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addContact = () => {
    this.props.addContact(this.state);
    console.log(this.state);
    this.reset();
    this.props.isVisible();
  };

  reset = () => {
    this.setState({
      id: uuid(),
      name: "",
      surname: "",
      phone: "",
    });
  };

  render() {
    return (
      <div className="modal">
        <form className="form">
          <h3>Add New Contact</h3>
          
          <input
            type="text"
            className="form-field "
            name="name"
            placeholder="Name"
            onChange={this.handleAllChanges}
            value={this.state.name}
          />

          <input
            type="text"
            className="form-field"
            name="surname"
            placeholder="Surname"
            onChange={this.handleAllChanges}
            value={this.state.surname}
          />

          <input
            type="tel"
            className="form-field "
            name="phone"
            placeholder="Phone"
            onChange={this.handleAllChanges}
            value={this.state.phone}
          />

          <button onClick={this.addContact}>Save</button>
          <button onClick={this.props.isVisible}>Cancel</button>

        </form>
      </div>
    );
  }
}

export default ContactForm;
