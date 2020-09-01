import React, { Component } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { identifyLoggedUser } from "./store/actions";
import Home from "./components/Home/home.js";


function PublicRoutes(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="*">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "120px auto",
            fontSize: "2rem",
          }}
        >
          {" "}
          Path not found
        </div>
      </Route>
    </Switch>
  );
}

function PrivateRoutes(props) {
  return (
    <Switch>
      <Route path="/me" component={Profile} />
      <Route path="*">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "120px auto",
            fontSize: "2rem",
          }}
        >
          {" "}
          Path not found
        </div>
      </Route>
    </Switch>
  );
}
class App extends Component {
  componentDidMount() {
    this.props.dispatch(identifyLoggedUser());
  }

  render() {
    let user = this.props.user;
    let gcoin = JSON.parse(localStorage.getItem("gcoin"));
    let token = gcoin && gcoin.token;

    return (
      <React.Fragment>
        {token && this.props.user.isAuthInProgress ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "120px auto",
              fontSize: "2rem",
            }}
          >
            LOADING.....
          </div>
        ) : user.currentUser ? (
          <PrivateRoutes />
        ) : (
          <PublicRoutes />
        )}
      </React.Fragment>
    );
  }
}
function mapToProps({ user }) {
  console.log(user, "from mapstatetoprops");
  return { user };
}

export default connect(mapToProps)(App);