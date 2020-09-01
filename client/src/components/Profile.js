import React, { Component } from "react";
import { connect } from "react-redux";


class Profile extends Component {
  render() {
    return <div>welcome to profile</div>;
  }
}

function mapToProps({ user }) {
  return { user };
}
export default connect(mapToProps)(Profile);