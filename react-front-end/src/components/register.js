import React, { useState } from "react";
import "./register.css";


function Register(props) {

  // const { users } = props
  // console.log(users);
  const [formData, updateFormData] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    if (formData.first_name === "") {
      setError("First name cannot be blank")
      return;
    }
    if (formData.last_name === "") {
      setError("Last name cannot be blank")
      return;
    }
    if (formData.email === "") {
      setError("Email cannot be blank")
      return;
    }
    if (formData.password === "") {
      setError("Password cannot be blank")
      return;
    }
    if (formData.phone_number === "") {
      setError("Phone number cannot be blank")
      return;
    }
    if (formData.building_code === "") {
      setError("Building code cannot be blank")
      return;
    }
    if (formData.unit_number === "") {
      setError("Unit Number cannot be blank")
      return;
    }
    setError("")

    // ... submit to API or something
    

  };



  return (
    <div className="container">
      <br />
      <h6>Register</h6>

      <form autoComplete="off" onSubmit={event => event.preventDefault()}>

        <label for="First Name" id="title_label">
          First Name :
        </label>
        <input
          placeholder="First Name"
          required
          type="text"
          name="first_name"
          onChange={handleChange}

        />

        <label for="Last Name" id="title_label">
          Last Name :
        </label>
        <input
          placeholder="Last Name"
          required
          type="text"
          name="last_name"
          onChange={handleChange}

        />

        <label for="Email" id="title_label">
          Email :
        </label>
        <input
          placeholder="Email"
          required
          type="text"
          name="email"
          onChange={handleChange}

        />

        <label for="Password" id="title_label">
          Password :
        </label>
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          onChange={handleChange}

        />

        <label for="Phone Number" id="title_label">
          Phone Number :
        </label>
        <input
          placeholder="Phone Number"
          required
          type="text"
          name="phone_number"
          onChange={handleChange}

        />

        <label for="Building Code" id="title_label">
          Building Code :
        </label>
        <input
          placeholder="Building Code"
          required
          name="building_code"
          onChange={handleChange}
        />

        <label for="Unit Number" id="title_label">
          Unit Number :
        </label>
        <input
          placeholder="Unit Number"
          required
          name="unit_number"
          onChange={handleChange}
        />

        <section className="registration_validation">{error}</section>

        <button type="submit" id="btn_submit" onClick={handleSubmit}>
          Submit
        </button>

      </form>
    </div>
  );
}

export default Register;
