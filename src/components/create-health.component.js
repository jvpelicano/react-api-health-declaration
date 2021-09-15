import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

export default class CreateHealth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      temperature: "",
      email: "",
      phone: "",
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
    this.setState({
      [e.target.dataset.name]: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const health = {
      fullname: this.state.fullname,
      temperature: this.state.temperature,
      email: this.state.email,
      phone: this.state.phone,
    };

    axios
      .post("https://react-api-jpelicano.herokuapp.com/health/add", health)
      .then((res) => (window.location = "/"))
      .catch((err) => console.log("Error: " + err));
  };

  render() {
    return (
      <div className="container">
        <h1>Create Health</h1>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              data-name="fullname"
              required
              onChange={this.onValueChange}
            />
            <label>Temperature</label>
            <input
              type="number"
              step="0.1"
              className="form-control"
              data-name="temperature"
              required
              onChange={this.onValueChange}
            />
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              data-name="email"
              required
              onChange={this.onValueChange}
            />
            <label>Phone Number</label>
            <input
              type="tel"
              className="form-control"
              data-name="phone"
              required
              onChange={this.onValueChange}
            />
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
