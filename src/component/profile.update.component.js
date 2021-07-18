import React, { Component } from "react";
import AuthService from "../service/auth.service";
import Profile from "../component/profile.component";
import config from "../config";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

class ProfileUpdate extends Component {
  constructor(props) {
    super(props);

    let currentUser = AuthService.getCurrentUser();
    console.log(currentUser.token);

    this.state = {
      currentUser: currentUser,
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      birthdate: currentUser.birthdate,
      gender: currentUser.gender,
    };

    this.goBack = this.goBack.bind(this); // i think you are missing this
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleBirthDateChange = this.handleBirthDateChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  handleFirstNameChange(event) {
    this.setState({ firstname: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastname: event.target.value });
  }

  handleBirthDateChange(event) {
    this.setState({ birthdate: event.target.value });
  }

  handleGenderChange(event) {
    this.setState({ gender: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        config.host.user.update + this.state.currentUser.id,
        {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          birthdate: this.state.birthdate,
          gender: this.state.gender
        },
        {
          headers: {
            Authorization: "Bearer " + this.state.currentUser.token,
          }
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        let currentUser = AuthService.getCurrentUser();
        let updatedUser = res.data;
        currentUser.firstname = updatedUser.firstname;
        currentUser.lastname = updatedUser.lastname;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        this.props.history.push("/");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        alert(error.response.data.message);
      });
  }

  componentDidMount() {
    // console.log(JSON.parse(localStorage.getItem("currentUser")));
    axios
      .get("http://localhost:5000/user/" + this.state.currentUser.id, {
        headers: {
          Authorization: "Bearer " + this.state.currentUser.token,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          birthdate: res.data.birthdate,
          gender: res.data.gender
        });
      })
      .catch(function (error) {
        console.log(error);
        alert(error.response.data.message);
      });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        {/*        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong>
            <strong>{currentUser.firstname}</strong>
            <strong>{currentUser.lastname}</strong>
          </h3>
        </header>*/}
        <form action="/" method="GET" onSubmit={this.handleSubmit}>
          <p>
            <strong>Id:</strong> {currentUser.id}
          </p>
          <p>
            <strong>Username:</strong> {currentUser.username}
          </p>
          <p>
            <strong>First name:</strong>
            <input
              class="form-control"
              type="text"
              value={this.state.firstname}
              onChange={this.handleFirstNameChange}
            />
          </p>
          <p>
            <strong>Last name:</strong>
            <input
              class="form-control"
              type="text"
              value={this.state.lastname}
              onChange={this.handleLastNameChange}
            />
          </p>
          <p>
            <strong>Birth day:</strong>
            <input
              class="form-control"
              type="date"
              value={this.state.birthdate}
              onChange={this.handleBirthDateChange}
            />
          </p>
          <p>
            <strong>Gender:</strong>
            <br />
            <select
              value={this.state.gender}
              onChange={this.handleGenderChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </p>
          <button type="button" onClick={this.goBack}>
            Go back
          </button>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(ProfileUpdate);
