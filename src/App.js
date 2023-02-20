import "./App.css";
import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import uuid from "react-uuid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      formVisible: false,
      contacts: [],
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
          <h3>Telephone Book</h3>
          <ContactList
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />
          <button onClick={this.handleToggleClick}>Add</button>
        </div>
        {this.state.formVisible ? (<ContactForm addContact={this.addNewContact} isVisible={this.handleToggleClick} />) : null}
      </div>
    );
  }
}

export default App;
