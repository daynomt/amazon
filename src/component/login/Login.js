import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config-data/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import "../login/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg "
        />
      </Link>
      <div className="login_container">
        <h1>sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signIn-in you agree to the AMAZON FAKE CLONE conditions of the
          sale.Please see our Privacy Notice.our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
