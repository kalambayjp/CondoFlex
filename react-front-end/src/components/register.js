import React from "react";
import "./register.css"

function Register() {
  return(
    <form className="register" action="/register" method="post">
      <h6>Register</h6>

      <input type="text" placeholder="First Name"></input>
      <input type="text" placeholder="Last Name"></input>
      <input type="text" placeholder="Email"></input>
      <input type="password" placeholder="Password"></input>
      <input type="text" placeholder="Phone Number"></input>
      <input type="text" placeholder="Building Code"></input>
      <input type="text" placeholder="Unit Number"></input>
      <input type="submit" value="Submit"></input>
    </form>
  )
}

export default Register