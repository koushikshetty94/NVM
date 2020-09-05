import React, { Component } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { identifyLoggedUser } from "./store/actions";
import Home from "./components/Home/home.js";
import About from "./components/aboutUs/about";
import Contact from "./components/contactUs/contact";
import Cart from "./cart/Cart";

function PublicRoutes(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/aboutus" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="*">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "120px auto",
            fontSize: "2rem"
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
      <Route path="/" exact component={Home} />
      <Route path="/me" component={Profile} />
      <Route path="/aboutus" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/cart" component={Cart} />
      <Route path="*">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "120px auto",
            fontSize: "2rem"
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
              fontSize: "2rem"
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
function mapToProps({ user, cart }) {
  console.log(user, cart, "from mapstatetoprops");
  return { user };
}

export default connect(mapToProps)(App);
