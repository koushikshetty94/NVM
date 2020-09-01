import React, { useRef } from "react";
import { connect } from "react-redux";

import { userLogin, userAuthProgress } from "../store/actions";

function Login(props) {
  let username = useRef(null);
  let password = useRef(null);

  function handleLogin(e) {
    e.preventDefault();
    props
      .dispatch(
        userLogin({
          username: username.current.value,
          password: password.current.value
        })
      )
      .then(data => {
        if (data.success) return props.history.push("/");
      })
      .catch(err => {
        console.log(err, "login failed");
        props.dispatch(
          userAuthProgress({ isAuthInProgress: false, isAuthDone: false })
        );
      });
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <h2 className="card-title text-center">Login </h2>
            <div className="card-body py-md-4">
              <form _lpchecked="1" onSubmit={e => handleLogin(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Username"
                    ref={username}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    ref={password}
                  />
                </div>
                <div className="text-center align-items-center ">
                  <button className="btn btn-primary" type="submit">
                    Login
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
export default connect(mapToProps)(Login);