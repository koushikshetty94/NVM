import {
  IDENTIFY_USER,
  LOGOUT_USER,
  LOGIN_USER,
  USER_AUTH_IN_PROGRESS,
  ADD_TO_CART
} from "./types";
import Axios from "axios";
import { store } from "./index";

export let loginUser = payload => {
  return { type: LOGIN_USER, payload };
};

export let userAuthProgress = payload => {
  return { type: USER_AUTH_IN_PROGRESS, payload };
};

export let fetchLoggedUser = payload => {
  return { type: IDENTIFY_USER, payload };
};

export let userSignUp = payload => {
  return function() {
    store.dispatch(
      userAuthProgress({ isAuthInProgress: true, isAuthDone: false })
    );
    console.log("actions");
    return Axios.post("/api/v1/users/register", { ...payload }).then(res => {
      if (res.data.success) {
        console.log(res, "signup successful");
        localStorage.setItem(
          "gcoin",
          JSON.stringify({ token: res.data.token })
        );
        store.dispatch(
          loginUser({
            currentUser: res.data.user,
            isAuthInProgress: false,
            isAuthDone: true
          })
        );
      } else if (!res.data.success) {
        console.log(res, "signup failed");
        store.dispatch(
          userAuthProgress({
            isAuthInProgress: false,
            isAuthDone: false
          })
        );
      }
      return res.data;
    });
  };
};

export let userLogin = payload => {
  console.log("its a payload", payload);
  return function() {
    store.dispatch(
      userAuthProgress({ isAuthInProgress: true, isAuthDone: false })
    );
    return Axios.post("/api/v1/users/login", { ...payload }).then(res => {
      if (res.data.success) {
        console.log(res, "login successful");
        localStorage.setItem(
          "gcoin",
          JSON.stringify({ token: res.data.token })
        );
        store.dispatch(
          loginUser({
            currentUser: res.data.user,
            isAuthInProgress: false,
            isAuthDone: true
          })
        );
      } else if (!res.data.success) {
        console.log(res, "login failed");
        store.dispatch(
          userAuthProgress({
            isAuthInProgress: false,
            isAuthDone: false
          })
        );
      }
      return res.data;
    });
  };
};

export let identifyLoggedUser = () => {
  return function() {
    if (localStorage.gcoin) {
	console.log(localStorage.gcoin,"localstorage from user identified")
      store.dispatch(
        userAuthProgress({ isAuthInProgress: true, isAuthDone: false })
      );
      Axios.get(`/api/v1/users/me`, {
        headers: { authorization: JSON.parse(localStorage.gcoin).token }
      })
        .then(res => {
          if (res.data.success) {
            console.log(res.data, "user identified");
            store.dispatch(
              fetchLoggedUser({
                currentUser: res.data.user,
                isAuthInProgress: false,
                isAuthDone: true
              })
            );
          }
        })
        .catch(err => console.log(err, "invalid user"));
    }
  };
};

export let addToCart = payload => {
  return { type: ADD_TO_CART, payload };
};
