import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";

import "./Profile.scss";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      currentActive: "purchases",
      request: true
    };
  }

  handleClick = i => {
    this.setState({ currentActive: i });
  };

  handleRequest = () => {
    Axios.get("/api/v1/users/redeem", {
      headers: { authorization: JSON.parse(localStorage.gcoin).token }
    })
      .then(res => {
        console.log(res.data, "res from redeem");
        if (res.data.success) return this.setState({ request: false });
      })
      .catch(err => console.log(err, "err from redeem"));
  };

  box = () => {
    if (this.state.currentActive == "purchases") {
      return (
        <div className="newBox">
          Your {this.state.currentActive}
          <div className="container table-responsive py-5">
            <table className="table table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {this.props.user.currentUser.purchases.length > 0
                  ? this.props.user.currentUser.purchases.map((p, id) => {
                      return (
                        <tr key={id}>
                          <th scope="row">{id}</th>
                          <td>{p.name}</td>
                          <td>{p.price}</td>
                          <td>{p.count}</td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    if (this.state.currentActive == "referralcode") {
      return (
        <div className="newBox">
          Your Referral Code is
          {this.props.user.currentUser &&
            " " + this.props.user.currentUser.referralcode}
        </div>
      );
    }
    if (this.state.currentActive == "balance") {
      return (
        <div className="newBox">
          Your Balance is
          {" ₹" +
            (this.props.user.currentUser &&
              this.props.user.currentUser.balance)}
          <div>
            {this.state.request ? (
              <button className="btn btn-primary" onClick={this.handleRequest}>
                {" "}
                Redeem{" "}
              </button>
            ) : (
              "Request Sent"
            )}
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="card profileStyle"  >
    <div className="container" style={{marginTop: "0px", marginBottom: "50px"}} >
      <div class="card mb-3 card-bg-img" style={{maxWidth: "960px"}}>
        <div class="row no-gutters">
          <div class="col-md-3 d-flex">
            <div className='align-self-center mx-3 my-4 rounded-circle bg-orange-gradient circular-div-size'></div>
          </div>
          <div class="col-md-9">
            <div class="card-body text-white">
              <h1 class="card-title">{this.props.user.currentUser && this.props.user.currentUser.name}</h1>
              <p class="card-text mb-0 profile-font-size">{this.props.user.currentUser && this.props.user.currentUser.username}</p>
              <p class="card-text mb-0"> {this.props.user.currentUser &&
                    this.props.user.currentUser.contactnumber}</p>
              <button type="button" style={{marginTop: '-51px'}} onClick={()=> {localStorage.clear()
	window.location.href="/"
		}}  class="border-0 float-right text-light rounded-pill btn btn-light px-4 py-2 bg-orange-gradient font-weight-bold">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        <header className="card-header" style={{display:"none"}} >
          <div className="hello">
            <img src="img/userprofile.webp" alt="" />
            <div className="heading-box">
              <h1>
                {this.props.user.currentUser &&
                  this.props.user.currentUser.name}
              </h1>
              <h3>
                {this.props.user.currentUser &&
                  this.props.user.currentUser.username}
                <br />
                <span>
                  {this.props.user.currentUser &&
                    this.props.user.currentUser.contactnumber}
                </span>
              </h3>
		<button classname="btn btn-primary" onClick={()=> {localStorage.clear()
	window.location.href="/"
		}} > Logout </button>
            </div>
          </div>
          <div className="button-box">
            <a className="follow-btn" href="#">
              <i className="material-icons"></i>
            </a>
          </div>
        </header>
        <main className="card-main">
          <div
            className="activity"
            onClick={() => this.handleClick("balance")}
            style={{ letterSpacing: "1.5px" }}
          >
            <i className="material-icons"></i>
            <span className="activity-name">Balance</span>
            <span className="index"></span>
          </div>
          <div
            className="activity"
            onClick={() => this.handleClick("purchases")}
            style={{ letterSpacing: "1.5px" }}
          >
            <i className="material-icons"></i>
            <span className="activity-name">Purchases</span>
            <span className="index"></span>
          </div>
          <div
            className="activity"
            onClick={() => this.handleClick("referralcode")}
          >
            <i className="material-icons"></i>
            <span className="activity-name" style={{ letterSpacing: "1.5px" }}>
              Referral Code
            </span>
            <span className="index"></span>
          </div>
        </main>
        {this.box("purchases")}
      </div>
    );
  }
}

function mapToProps({ user, cart }) {
  return { user, cart };
}
export default connect(mapToProps)(Profile);
