import React, { Component } from "react";

import "./ContactList.css";

class ContactList extends Component {
    
  render() {
    return (
      <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.surname}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <button onClick={() => {this.props.deleteContact(contact.id);}}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

export default ContactList;
