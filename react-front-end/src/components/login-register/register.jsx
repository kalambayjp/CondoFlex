import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";
import Popup from "../PopUp";


function Register(props) {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  const [formData, updateFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    unit_number: "",
    building_id: ""
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.first_name && formData.last_name && formData.email && formData.password && formData.phone_number && formData.building_id && formData.unit_number) {
      axios
        .post('http://localhost:8080/api/users/register', { formData })
        .then((res) => {
          const {
            data: { userCreated, userId, firstName, buildingCode },
          } = res;

          // If user successfully created.

          if (userCreated === "Successful") {
            console.log(userId);

            localStorage.setItem("name", firstName);
            localStorage.setItem("id", userId)
            localStorage.setItem("building_id", buildingCode)
            navigate(`/`);
          } else {
            setIsOpen(!isOpen);
          }
        })
        .catch(err => {
          console.error(err);
        });

    }

  };



  return (
    <div className="register-container">
      <br />
      <h6>Register</h6>
      <form autoComplete="off" onSubmit={handleSubmit}>

        <label for="First Name" id="title_label">First Name&nbsp; &nbsp;&nbsp; &nbsp;:</label>
        <input
          placeholder="First Name"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required

        /> <br />


        <label for="Last Name" id="title_label">Last Name &nbsp; &nbsp;&nbsp; &nbsp;:</label>
        <input
          placeholder="Last Name"
          type="text"
          name="last_name"
          onChange={handleChange}
          value={formData.last_name}
          required

        />  <br />

        <label for="Email" id="title_label">Email &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;:</label>
        <input
          placeholder="Email"
          type="text"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required

        />  <br />

        <label for="Password" id="title_label">Password &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;:</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required

        />  <br />


        <label for="Phone Number" id="title_label">Phone Number :</label>
        <input
          placeholder="Phone Number"
          type="text"
          name="phone_number"
          onChange={handleChange}
          value={formData.phone_number}
          required

        />  <br />

        <label for="Building Code" id="title_label">Building Code :</label>
        <input
          placeholder="Building Code"
          name="building_id"
          onChange={handleChange}
          value={formData.building_id}
          required

        />  <br />

        <label for="Unit Number" id="title_label"> Unit Number &nbsp; &nbsp;:</label>
        <input
          placeholder="Unit Number"
          name="unit_number"
          onChange={handleChange}
          value={formData.unit_number}
          required

        />  <br />

        <div>
          {isOpen && (
            <Popup
              content={
                <>
                  <b>Wrong information. Please try again!</b>
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

export default Register;
