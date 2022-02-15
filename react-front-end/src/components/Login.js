import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";

//For Login view
export default function Login(props) {
  const { state } = props;
  const userDatabase = state.users;
  console.log(userDatabase)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);


  const handleSubmit = async e => {
    e.preventDefault();

    var user = userDatabase.find(item => item.email === email && item.password === password);

    if (user) {
      setRedirect(true);
      console.log({ user })
      return <redirect to="/home" />;
    }

  };

  return (

    <div className="login_container">
      <br />

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
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
            placeholder="Enter a password"
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
