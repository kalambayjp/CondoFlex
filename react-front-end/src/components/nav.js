import React from "react";
import axios from "axios";
import "./nav.css";
import logo from '../images/logo.png';

function Nav(props) {
  const { state, setState } = props;
  return (
<<<<<<< HEAD
    <nav className="navbar">
      <div className="container-fluid">
        <div className="logo">
          <img src={logo} href="#" alt="Condo Flex" />
        </div>
=======
    <nav class="navbar fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
>>>>>>> 6740fb4927b34b7ebb25c6b20b3168959bb59f2b
        <section>
          <button id="btn_nav" onClick={() => setState("login")}>
            Login
          </button>
          <button id="btn_nav" onClick={() => setState("register")}>
            Register
          </button>

        </section>
      </div>
    </nav>
  );
}

export default Nav;
