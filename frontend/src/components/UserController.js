import React, { Component } from "react";

const url = "/user";

class UserController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          this.setState({
            users: data
          });
        },
        error => {
          console.log("error");
        }
      );
  }

  render() {
    const list = this.state.users.map((value, index) => {
      return (
        <tr key={index}>
          <th scope="row">{value.id}</th>
          <th>{value.firstName}</th>
          <th>{value.lastName}</th>
        </tr>
      );
    });

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  }
}

export default UserController;
