import React from "react";
import "./LogIn.css";
import { useState } from "react";
import img1 from "./img/bg.svg";
import img2 from "./img/avatar.svg";

const LogIn = ({ setIsLoggedIn, users, setAdmin }) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    const _user = users.filter(
      (user) => user.email === email && user.password === password
    );
    // console.log(_user);
    if (_user.length !== 0) {
      setIsLoggedIn(true);
      setAdmin(..._user);
    } else console.log("error");
  };

  return (
    <div className="signin">
      <img className="wave" src={require("./img/wave.png")} alt="bg" />
      <div className="container">
        <div className="img">
          <img src={img1} alt="container-bg" />
        </div>
        <div className="login-content">
          <form className="form">
            <img src={img2} alt="login-bg" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  className="input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  className="input"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <button type="submit" className="btn" value="Login" onClick={login}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
