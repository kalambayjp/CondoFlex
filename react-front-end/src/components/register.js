import React from "react";
import "./register.css";

function Register() {

  return(
     <div className="container">
      <br />
      <h6>Register</h6>
    
    <form className="register" action="/register" method="post">

      <label for="First Name" id="title_label">
                First Name :
              </label>
        <input placeholder="First Name"></input>
        <label for="Last Name" id="title_label">
                Last Name :
              </label>
        <input placeholder="Last Name"></input>
        <label for="Email" id="title_label">
                Email :
              </label>
        <input placeholder="Email"></input>
        <label for="Password" id="title_label">
                Password :
              </label>
        <input placeholder="Password"></input>
        <label for="Phone Number" id="title_label">
                Phone Number :
              </label>
        <input placeholder="Phone Number"></input>
        <label for="Building Code" id="title_label">
                Building Code :
              </label>
        <input placeholder="Building Code"></input>
        <label for="Unit Number" id="title_label">
                Unit Number :
              </label>
        <input placeholder="Unit Number"></input>

        <button type="submit" id="btn_submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
