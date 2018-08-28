import React, { Component } from "react";
import axios from "axios";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(data =>
        this.setState({ title: data.data.name, body: data.data.username })
      );
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h3>{this.state.body}</h3>
      </div>
    );
  }
}

export default Test;
