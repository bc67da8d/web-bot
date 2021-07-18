import React from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../service/auth.service";

class Logout extends React.Component {
  componentDidMount() {
    AuthService.logout();
    window.location.reload();
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default Logout;
