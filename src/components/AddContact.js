import React, { Component } from "react";
import { Consumer } from "../context";
import uuid from "uuid";

import axios from "axios";
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { email, name, phone } = this.state;

    const newContact = {
      name,
      email,
      phone
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newContact)
      .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }));

    this.setState({
      name: "",
      email: "",
      phone: ""
    });

    this.props.history.push("/");
  };

  addContact = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                Add Contact{" "}
                <i className="fas fa-angle-down" onClick={this.addContact} />
              </div>

              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      required
                      onChange={this.onChangeHandler}
                      value={name}
                      className="form-control form-control-lg"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      required
                      onChange={this.onChangeHandler}
                      value={email}
                      className="form-control form-control-lg"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      required
                      onChange={this.onChangeHandler}
                      value={phone}
                      className="form-control form-control-lg"
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-light btn-block"
                    value="Add Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
