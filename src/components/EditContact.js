import React, { Component } from "react";
import { Consumer } from "../context";
import uuid from "uuid";

import axios from "axios";
class EditContact extends Component {
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

    this.props.history.push("/");
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  componentDidMount() {
    const { name, email, phone } = this.state;
    const { id } = this.props.match.params;
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(data => {
      this.setState({
        name: data.data.name,
        email: data.data.email,
        phone: data.data.phone
      });
    });
  }
  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                Edit Contact{" "}
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
                    value="Update Contact"
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

export default EditContact;
