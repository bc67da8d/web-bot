import React, { useState } from "react";
import Dashboard from "./component/dashboard.component";
import Userlist from "./component/user.list.component";
import Login from "./component/login.component";
import Register from "./component/register.component";
import Logout from "./component/logout.component";
import Profile from "./component/profile.component";
import ProfileUpdate from "./component/profile.update.component";
import AuthService from "./service/auth.service";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  Redirect,
} from "react-router-dom";

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };

    this.useHistory = this.props.useHistory;
    console.log(this.useHistory);
  }

  render() {
    const { currentUser } = this.state;

    if (!currentUser) {
      return (
        <Router>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      );
    }

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/profile/edit">
              <ProfileUpdate />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/users">
              <Userlist />
            </Route>
            <Route path="/">
              <Redirect to="/profile" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Application;
