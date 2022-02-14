import React,{useState} from "react";
import axios from "axios";
import "./nav.css";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';


function Nav(props) {
  const { state, setState } = props;
  const [btnState, setBtnState]=useState()
  return (
    <nav class="navbar">
      <div className="container-fluid">
      <div className="logo">
        <img src={logo} href="#" alt="Condo Flex"/>
        </div>
        <section>

          <Link to="/login">
            <button id="btn_nav"  onClick={() => setState("login")} >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button id="btn_nav" onClick={() => setState("register")}>
              Register
            </button>
          </Link>
        </section>
      </div>
    </nav>
  );
}

export default Nav;
