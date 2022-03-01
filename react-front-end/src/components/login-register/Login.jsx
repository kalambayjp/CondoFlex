import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Popup from "../PopUp";

//For Login view
export default function Login(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  let navigate = useNavigate();

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

          data: { Logged, building_id, first_name, user_id},
        } = res;

        if (Logged === "Successful") {

          localStorage.setItem("name", first_name);
          localStorage.setItem("building_id",building_id)
          localStorage.setItem("id",user_id)
          navigate(`/${building_id}/amenities`);

          props.setState((prevState) => {
            return { ...prevState, user: {id: user_id, first_name: first_name} , buildingId: building_id};
          });
        } else {
          setIsOpen(!isOpen);
        }
      });

  
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
