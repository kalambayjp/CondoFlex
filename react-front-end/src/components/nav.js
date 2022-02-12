import React from "react";
import axios from "axios";
import "./nav.css";
import logo from '../images/logo.png';

function Nav(props) {
  const { state, setState } = props;
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="logo">
          <img src={logo} href="#" alt="Condo Flex" />
        </div>
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
