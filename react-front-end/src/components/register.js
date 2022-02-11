import React from "react";
import "./register.css"

function Register() {
  return(
    <form className="register">
      <h6>Register</h6>

      <input placeholder="First Name"></input>
      <input placeholder="Last Name"></input>
      <input placeholder="Email"></input>
      <input placeholder="Password"></input>
      <input placeholder="Phone Number"></input>
      <input placeholder="Building Code"></input>
      <input placeholder="Unit Number"></input>

    </form>
  )
}

export default Register