import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const getData = async () => {
    console.log(name, email, password);
    let result = await fetch(
      "https://e-dashboard-backend-sjgp.onrender.com/register",
      {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="signup-page-container">
      {/* <Navbar/> */}
      <div className="signup-form-container">
        <form className="signup-form">
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="name"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="button" onClick={getData}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
