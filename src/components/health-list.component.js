import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Health = (props) => {
  return (
    <tr>
      <td>{props.health.fullname}</td>
      <td>{props.health.temperature}</td>
      <td>{props.health.email}</td>
      <td>{props.health.phone}</td>
      <td className="text-center">
        <Link
          className="btn btn-sm btn-primary"
          to={"/edit/" + props.health._id}
        >
          Edit
        </Link>{" "}
        <a
          className="m-0 btn btn-sm btn-danger"
          href="#"
          onClick={() => {
            props.deleteHealth(props.health._id);
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default class HealthList extends Component {
  constructor(props) {
    super(props);

    this.state = { health: [] };
    this.deleteHealth = this.deleteHealth.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://react-api-jpelicano.herokuapp.com/health/")
      .then((res) => {
        this.setState({ health: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteHealth(id) {
    axios
      .delete("https://react-api-jpelicano.herokuapp.com/health/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      health: this.state.health.filter((el) => el._id !== id),
    });
  }

  healthDeclarations() {
    return this.state.health.map((currentHealth) => {
      return (
        <Health
          health={currentHealth}
          deleteHealth={this.deleteHealth}
          key={currentHealth._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Health Declaration Table</h1>

        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Full Name</th>
              <th>Temperature</th>
              <th>Email</th>
              <th>Phone</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>{this.healthDeclarations()}</tbody>
        </table>
      </div>
    );
  }
}
