import React, { Component } from "react";
import AuthService from "../service/auth.service";
import ProfileUpdate from "../component/profile.update.component";
import config from "../config.json";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };

    this.goUpdate = this.goUpdate.bind(this);
  }

  goUpdate() {
    this.props.history.push("/profile/edit");
  }

  componentDidMount() {
    // console.log(JSON.parse(localStorage.getItem("currentUser")));
    axios
      .get(config.user.detail + this.state.currentUser.id, {
        headers: {
          Authorization: 'Bearer ' + this.state.currentUser.token
        }
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({
          currentUser: res.data,
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
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Username:</strong> {currentUser.username}
        </p>
        <p>
          <strong>First name:</strong> {currentUser.firstname}
        </p>
        <p>
          <strong>Last name:</strong> {currentUser.lastname}
        </p>
        <p>
          <strong>Birth date:</strong> {currentUser.birthdate}
        </p>
        <p>
          <strong>Gender:</strong> {currentUser.gender}
        </p>
        <button type="button" onClick={this.goUpdate}>
          Update
        </button>
      </div>
    );
  }
}

export default withRouter(Profile);