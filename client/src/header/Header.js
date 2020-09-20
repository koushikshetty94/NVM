import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import $ from "jquery";
import loadjs from "loadjs";

class Header extends React.Component {
  componentDidMount() {
    loadjs("/main.js");
  }
  render() {
    var currentUser = this.props.user.currentUser;
    return (
      <header
        className="header-section"
        style={{ filter: this.props.showCart ? "blur(8px)" : "blur(0px)" }}
      >
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src="img/logo.png" alt="" />
            </a>
          </div>
          <div className="nav-menu">
            <nav className="mainmenu mobile-menu">
              <ul>
                <li className="active">
                  <NavLink exact to="/" activeClassName="activeNav">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/aboutUs" activeClassName="activeNav">
                    About
                  </NavLink>
                </li>
                <li>
                  <a href="#contest">Lucky Contest</a>
                </li>
                <li>
                  <a href="#">Updates</a>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="activeNav">
                    Contact
                  </NavLink>
                </li>

                <Link
                  to={currentUser ? "/me" : "/signup"}
                  className={currentUser ? "" : "primary-btn top-btn"}
                >
                  <li>
                    {currentUser ? (
                      <Link to="/me" style={{ color: "tomato" }}>
                        Welcome {currentUser.name}
                      </Link>
                    ) : (
                      <>
                        <i className="fa fa-ticket"></i>Free Ticket/Login
                      </>
                    )}
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </header>
    );
  }
}

function mapToProps({ user, cart }) {
  return { user, cart };
}

export default connect(mapToProps)(Header);
