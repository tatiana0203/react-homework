import React, { Component } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

import uuid from "react-uuid";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      formVisible: false,
      contacts: [
        {
          id:uuid(),
          name:"Someone",
          surname:"Someone",
          phone:"+8884473213"
        },
        {
          id:uuid(),
          name:"Someone",
          surname:"Someone",
          phone:"+6345543213"
        }
      ],
    };
  }

  addNewContact = (newContact) => {
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  handleToggleClick = () => {
    this.setState((state) => ({
      formVisible: !state.formVisible,
    }));
  };



  render() {
    return (
      <div className="App">
        <div className="Contacts">
          <h1>Phone Book</h1>

          <ContactList
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        
          <button className="add-button" onClick={this.handleToggleClick}>Add</button>

          {this.state.formVisible ? (<ContactForm addContact={this.addNewContact} isVisible={this.handleToggleClick} />) : null}

        </div>
      </div>
    );
  }
}

export default App;
