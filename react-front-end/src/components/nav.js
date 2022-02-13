import React,{useState} from "react";
import axios from "axios";
import "./nav.css";
import logo from '../images/logo.png';

function Nav(props) {
  const { state, setState } = props;
  const [btnState, setBtnState]=useState()
  return (
    <nav class="navbar fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <section>
          <button id="btn_nav" onClick={ setState("login")}>
            Login
          </button>
          <button id="btn_nav" onClick={setState("register")}>
            Register
          </button>

        </section>
      </div>
    </nav>
  );
}

export default Nav;
