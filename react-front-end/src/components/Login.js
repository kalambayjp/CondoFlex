import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

//For Login view
export default function login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();
  console.log("Props", props);
  let users = props.users || [];

  console.log("Props", props);

  const submitLogin = async (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");

    const found = users.find(
      (element) => element.email === email && element.password === password
    );

    console.log("FOUND", found);
    if (found) {
      navigate(`/${found.building_code}/amenities`);
      props.setState((prevState) => {
        // Object.assign would also work
        return { ...prevState, user: found };
      });
    }
    
  };

  return (
    <div className="login_container">
      <br />

      <h2>Login</h2>

      <form onSubmit={submitLogin}>
        <div className="login_email">
          <label for="email" id="title_label">
            <br />
            Email :
          </label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            placeholder="ABC@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="login_email">
          <label for="password" id="title_label">
            Password :
          </label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <br />

        <button type="submit" id="btn_submit">
          Submit
        </button>
      </form>
    </div>
  );
}
