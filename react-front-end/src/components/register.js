import React from "react";
import "./register.css";

function Register() {

  return (
    <div className="container">
      <br />
      <h6>Register</h6>

      <form className="register" action="/register" method="post">

        <label for="First Name" id="title_label">
          First Name :
        </label>
        <input placeholder="First Name" required></input>

        <label for="Last Name" id="title_label">
          Last Name :
        </label>
        <input placeholder="Last Name" required></input>

        <label for="Email" id="title_label">
          Email :
        </label>
        <input placeholder="Email" required></input>

        <label for="Password" id="title_label">
          Password :
        </label>
        <input type="password" placeholder="Password" required></input>

        <label for="Phone Number" id="title_label">
          Phone Number :
        </label>
        <input placeholder="Phone Number" required></input>

        <label for="Building Code" id="title_label">
          Building Code :
        </label>
        <input placeholder="Building Code" required></input>

        <label for="Unit Number" id="title_label">
          Unit Number :
        </label>
        <input placeholder="Unit Number" required></input>

        <button type="submit" id="btn_submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default Register;
