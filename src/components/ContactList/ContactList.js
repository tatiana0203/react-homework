import React, { Component } from "react";

class ContactList extends Component {
    render(){
        return (
            <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Surname</td>
                <td>Phone</td>
                <td></td>
              </tr>
              {this.props.contacts.map((contact) => {
                return (
                  <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.surname}</td>
                    <td>{contact.phone}</td>
                    <td><button onClick={() => {this.props.deleteContact(contact.id)}}>Delete</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )
    }
        
    
        
    
}
export default ContactList;
