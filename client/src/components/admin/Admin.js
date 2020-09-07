import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Axios from "axios";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      currentActive: "purchases",
      admin: null
    };
  }

  componentDidMount() {
    Axios.get("/api/v1/admins")
      .then(res => {
        console.log(res.data, "from admin cdm");
        this.setState({ admin: res.data.admin });
      })
      .catch(err => {
        console.log(err, "err from cdm admin");
      });
  }

  handleClick = i => {
    this.setState({ currentActive: i });
  };

  box = () => {
    if (this.state.currentActive == "requests") {
      return (
        <div className="newBox">
          Your {this.state.currentActive}
          <div className="container table-responsive py-5">
            <table className="table table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Pay</th>
                </tr>
              </thead>
              <tbody>
                {this.state.admin &&
                  this.state.admin.requests.map((r, id) => {
                    return (
                      <tr key={id}>
                        <th scope="row">{"#"}</th>
                        <td>{r.name}</td>
                        <td>{r.balance}</td>
                        <td>
                          <button className="btn btn-primary">
                            Accept Request And Pay
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    if (this.state.currentActive == "referralcode") {
      return <div className="newBox">Under Development</div>;
    }
    if (this.state.currentActive == "purchases") {
      return <div className="newBox">Under Development</div>;
    }
  };

  render() {
    return (
      <div className="card profileStyle">
        <header className="card-header">
          <div className="hello">
            <img src="img/admin.jpg" alt="" />
            <div className="heading-box">
              <h1>Welcome </h1>
              <h3>
                Admin
                <br />
                <span>
                  <button
                    onClick={() => {
                      localStorage.removeItem("gcoinadmin");
                      this.props.history.push("/");
                    }}
                  >
                    Logout
                  </button>
                </span>
              </h3>
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
            onClick={() => this.handleClick("requests")}
            style={{ letterSpacing: "1.5px" }}
          >
            <i className="material-icons"></i>
            <span className="activity-name">Requests</span>
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
              Other
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
export default connect(mapToProps)(withRouter(Admin));
