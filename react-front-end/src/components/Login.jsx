import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";

//For Login view
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState(false);

  const submitLogin = async (event) => {
    event.preventDefault();
    try {
      let response = await axios({
        method: "post",
        url: `/login`,
        data: {
          email: email,
          password: password,
        },
        withCredentials: true,
      });

      setRedirect(true);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) {
    return <redirect to="/home" />;
  }

  return (
    <main>
      <div className="login_container">
        <div className="login_arrange_container">
          <h2>Login</h2>
          <form onSubmit={submitLogin}>
            <div className="login_email">
              <label for="username" id="title_label">
                Email :
              </label>
              <br />
              <input
                className="input"
                type="email"
                email={email}
                onChange={(event) => setEmail(event.target.value)}
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
                password={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <br />

            <button type="submit" id="button_to_login">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
