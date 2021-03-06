import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => {
                return <Contact key={contact.id} contacts={contact} />;
              })}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
