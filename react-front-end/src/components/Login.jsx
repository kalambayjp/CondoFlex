import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

//For Login view
export default function login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookie] = useCookies(['user']);
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  console.log("Props", props);
  let users = props.users || [];

  console.log("Users", users);

  const handleChange = (e) => {
    const name = e.target.name;
    const password = e.target.value;
    setCookie('Name', name, { path: '/' });
    setCookie('Password', password, { path: '/' });
    setFormDetails({ ...formDetails, [name]: password });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users/login", { formDetails })
      .then((res) => {
        const {data:allData} = res;
        const {
          data: { Logged, building_code, first_name },
        } = res;
       
        // If successfully logged IN.
  
        if (Logged === "Successful") {
          navigate(`/${building_code}/amenities`);
          props.setState((prevState) => {
            // Object.assign would also work
            return { ...prevState, user: allData };
          });
        } else {
          alert("Please enter correct login information");
          return  navigate(`/register`);
        }
      });

    console.log("FORMMMMMMMMM", formDetails);
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
            name="email"
            value={formDetails.email}
            placeholder="ABC@gmail.com"
            onChange={handleChange}
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
            name="password"
            value={formDetails.password}
            onChange={handleChange}
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
