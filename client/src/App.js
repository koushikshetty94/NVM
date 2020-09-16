import React, { Component } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { identifyLoggedUser } from "./store/actions";
import Home from "./components/Home/home.js";
import About from "./components/aboutUs/about";
import Contact from "./components/contactUs/contact";
import Cart from "./cart/Cart";
import Admin from "./components/admin/Admin";
// import Profile from "../src/components/Profile";

function PublicRoutes(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/aboutus" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/admin">
        {JSON.parse(localStorage.getItem("gcoinadmin")) ? (
          <Admin />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              margin: "120px auto",
              fontSize: "2rem"
            }}
          >
            <div>Please login as admin</div>

            <Link to="/login">Login</Link>
          </div>
        )}
      </Route>
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
      <Route path="/admin">
        {JSON.parse(localStorage.getItem("gcoinadmin")) ? (
          <Admin />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "120px auto",
              fontSize: "2rem"
            }}
          >
            <div>Please login as admin</div>
            <Link to="/login">Login</Link>
          </div>
        )}
      </Route>

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
	// console.log = function() {
	 // }
    console.log(process.env.NODE_ENV, "raxror");
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
