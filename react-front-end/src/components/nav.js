import React from "react";
import axios from "axios";
import "./nav.css";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import logo from '../images/logo.png';
>>>>>>> main

function Nav(props) {
  const { state, setState } = props;
  return (
    <nav class="navbar fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <section>
<<<<<<< HEAD
          <Link to="/login">
            <button class="navbar-brand" href="#">
              Login
            </button>
          </Link>
          <Link to="/register">
          <button class="navbar-brand" onClick={() => setState("register")}>
            Register
          </button>
          </Link>
          
=======
          <button id="btn_nav" onClick={() => setState("login")}>
            Login
          </button>
          <button id="btn_nav" onClick={() => setState("register")}>
            Register
          </button>

>>>>>>> main
        </section>
      </div>
    </nav>
  );
}

export default Nav;
