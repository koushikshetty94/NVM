import React, { useRef } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { userLogin, userAuthProgress } from "../store/actions";
import Axios from "axios";

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

  const handleAdminLogin = () => {
    if (username.current.value && password.current.value) {
      console.log("puneet", {
        username: username.current.value,
        password: password.current.value
      });
      Axios.post("/api/v1/admins", {
        username: username.current.value,
        password: password.current.value
      })
        .then(async res => {
          console.log(res.data, "response from admin login");
          if (res.data.success) {
            console.log(res, "login successful");
            await localStorage.setItem(
              "gcoinadmin",
              JSON.stringify({ token: res.data.token })
            );
            console.log(localStorage, "localStorage");
            window.location.href = "/admin";
            props.history.push("/admin");
          }
        })
        .catch(err => console.log(err, "err from admin login"));
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card" style={{ background: "none" }}>
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
                <span
                  style={{
                    cursor: "pointer",
                    color: "darkblue",
                    paddingTop: "40px"
                  }}
                  onClick={handleAdminLogin}
                >
                  Login as Admin
                </span>
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
export default connect(mapToProps)(withRouter(Login));
