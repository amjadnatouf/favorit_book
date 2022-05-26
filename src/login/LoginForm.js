import React, { useState } from "react";
import "./loginform.css";

const LoginForm = ({ setIsLoggedIn, users, setAdmin }) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    const _user = users.filter(
      (user) => user.email === email && user.password === password
    );
    console.log(_user);
    if (_user.length !== 0) {
      setIsLoggedIn(true);
      setAdmin(..._user);
    } else console.log("error");
  };

  return (
    <div className="form-container">
      <form className="form-group">
        <h2> LOGIN</h2>
        <p>Please enter your email and password!</p>
        <div className="form-body">
          <div className="input-group">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="input-group">
            <label className="form-label" htmlFor="password">
              password:
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            // type="submit"
            className="btn btn-primary btn-block"
            onClick={login}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
