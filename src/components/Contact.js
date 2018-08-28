import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDelete = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }));
  };

  render() {
    const { showContactInfo } = this.state;
    const { id, name, email, phone } = this.props.contacts;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  className="fas fa-angle-down"
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer" }}
                />{" "}
                <i
                  className="fas fa-times"
                  onClick={this.onDelete.bind(this, id, dispatch)}
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                />
                <Link to={`editContact/${id}`}>
                  <i
                    className="fas fa-edit"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      marginRight: "1rem",
                      float: "right"
                    }}
                  />{" "}
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group ">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contacts: PropTypes.object.isRequired
};
