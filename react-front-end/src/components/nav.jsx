import React, { useState } from "react";
import axios from "axios";
import "./nav.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

function Nav(props) {
  const { state, setState } = props;
  let navigate = useNavigate();

  console.log("PPPPProp", props);

  const Logout = async () => {
    const user = undefined;
    setState({ ...state, user });
    localStorage.clear();
    navigate(`/`);
  };

  return (

    <nav className="navbar">
      <div className="container-fluid">
        <div id="logo">
          <img src={logo} href="/" alt="Condo Flex" />
        </div>
        <section>
          <div>
            {!localStorage.getItem("name") ? (
              <>
                <Link to="/login">
                  <button id="btn_nav">Login</button>
                </Link>
                <Link to="/register">
                  <button id="btn_nav">Register</button>
                </Link>
              </>
            ) : (
              <>
              <h3>Welcome {localStorage.getItem("name")}</h3>
              <button type="submit" id="btn_nav" onClick={Logout}>
                Logout
              </button>
              </>
            )}
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Nav;
