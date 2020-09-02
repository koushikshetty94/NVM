import React, { useRef, Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { userSignUp, userAuthProgress } from "../store/actions";

function SignUp(props) {
  let name = useRef(null);
  let username = useRef(null);
  let contactnumber = useRef(null);
  let password = useRef(null);

  const handleSignup = e => {
    e.preventDefault();
    props
      .dispatch(
        userSignUp({
          name: name.current.value,
          username: username.current.value,
          contactnumber: contactnumber.current.value,
          password: password.current.value
        })
      )
      .then(data => {
        if (data.success) return props.history.push("/");
        // if (data.err.errmsg.includes("duplicate"))
        //   console.log("username already exists");
      })
      .catch(err => {
        console.log(err, "signup failed");
        props.dispatch(
          userAuthProgress({ isAuthInProgress: false, isAuthDone: false })
        );
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <h2 className="card-title text-center">Register</h2>
            <div className="card-body py-md-4">
              <form _lpchecked="1" onSubmit={e => handleSignup(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="input form-control"
                    id="name"
                    placeholder="Name"
                    ref={name}
                  />
                </div>
                <div className="input form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="username"
                    ref={username}
                  />
                </div>
                <div className="input form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Contact Number"
                    ref={contactnumber}
                  />
                </div>

                <div className="input form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    ref={password}
                  />
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <span
                    style={{ cursor: "pointer", color: "darkblue" }}
                    onClick={() => props.history.push("/login")}
                  >
                    Login
                  </span>
                  <button className="btn btn-primary" type="submit">
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapToProps({ user }) {
  return { user };
}
export default connect(mapToProps)(withRouter(SignUp));