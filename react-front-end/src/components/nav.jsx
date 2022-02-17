/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  const { setState } = props;
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <section>
          <Link to="/login">
            <button className="navbar-brand" href="#">
              Login
            </button>
          </Link>
          <Link to="/register">
          <button className="navbar-brand" onClick={() => setState("register")}>
            Register
          </button>
          </Link>
          
        </section>
      </div>
    </nav>
  );
}

export default Nav;
