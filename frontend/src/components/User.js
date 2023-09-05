import React, { Component } from "react";

class User extends Component {
  constructor() {
    super();
    console.log("Component has been constructed ");
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default User;
