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
      .then(response => response.json)
      .then(
        data => {
          console.log(data);
        },
        error => {
          console.log("error");
        }
      );
  }

  render() {
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
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserController;
