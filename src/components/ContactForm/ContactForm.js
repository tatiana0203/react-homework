import React, { Component } from "react";
import uuid from "react-uuid";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      id:uuid(),
      name: "",
      surname: "",
      phone: "",
    };
    this.addContact = this.addContact.bind(this);
    this.handleAllChanges=this.handleAllChanges.bind(this);
    this.reset=this.reset.bind(this)
  }


  handleAllChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addContact = () => {
    this.props.addContact(this.state);
    console.log(this.state)
    this.reset()
    this.props.isVisible()
  };


  

  reset=()=>{
    this.setState({
      id:uuid(),
      name:"",
      surname:"",
      phone:""
    })
  }

 

  render() {
    return (
      <div>
        <div className="NewContact">
          <form>
            <input
              className="name-input"
              name="name"
              onChange={this.handleAllChanges}
              value={this.state.name}
            />
            <input
              className="surname-input"
              name="surname"
              onChange={this.handleAllChanges}
              value={this.state.surname}
            />
            <input
              className="number-input"
              name="phone"
              onChange={this.handleAllChanges}
              value={this.state.phone}
            />
          </form>
          <div>
            <p>{this.state.name}</p>
            <p>{this.state.surname}</p>
            <p>{this.state.phone}</p>
          </div>
          <button onClick={this.addContact}>Save</button>
          <button onClick={this.props.isVisible}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default ContactForm;
