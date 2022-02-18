import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Popup from "./PopUp";

//For Login view
export default function login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [cookies, setCookie] = useCookies(["user"]);
  const [isOpen, setIsOpen] = useState(false);
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  let navigate = useNavigate();
  console.log("Props", props);
  let users = props.users || [];

  console.log("Users", users);

  const handleChange = (e) => {
    const name = e.target.name;
    const password = e.target.value;
    setFormDetails({ ...formDetails, [name]: password });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users/login", { formDetails })
      .then((res) => {
        const { data: allData } = res;
        const {
          data: { Logged, building_code, first_name },
        } = res;
        console.log("RESPONSE", res.data);

        // If successfully logged IN.

        if (Logged === "Successful") {
          // setCookie('Name', first_name, { path: '/' });
          localStorage.setItem("name", first_name);
          navigate(`/${building_code}/amenities`);
          props.setState((prevState) => {
            // Object.assign would also work
            return { ...prevState, user: allData };
          });
        } else {
          setIsOpen(!isOpen);
          // return  navigate(`/register`);
        }
      });

    // console.log("FOUND", found);
    // if (found) {
    //   setEmail("");
    //   setPassword("");
    //   navigate(`/${found.building_code}/amenities`);
    //   props.setState((prevState) => {
    //     // Object.assign would also work
    //     return { ...prevState, user: found };
    //   });
    // }
    
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
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {isOpen && (
            <Popup
              content={
                <>
                  <b>Wrong password or email. Please try again!</b>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>

        <br />

        <button type="submit" id="btn_submit">
          Submit
        </button>
      </form>
    </div>
  );
}